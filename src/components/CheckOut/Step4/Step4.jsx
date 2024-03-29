import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { clearBasket } from 'redux/basket/operations';
import {
  getFromStorage,
  removeItem,
  saveToStorage,
} from 'services/localStorService';
import { makeOrder } from 'services/APIservice';
import { getUser } from 'redux/auth/selectors';
import { useAuth } from 'hooks/useAuth';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { addReload } from 'redux/reload/slice';
import { onFetchError, onSuccess } from '../../helpers/Messages/NotifyMessages';
import { Basket } from '../../Basket/Basket';
import { PensilStyle } from 'components/UserComp/UserData/UserData.styled';
import {
  TotalBasket,
  DataContainerItem,
  DataTitle,
  DataContainerItems,
  InputComments,
  DataContainerText,
  DataContainerPensil,
  DataContainerCheckMark,
  DataContainerTextBox,
} from './Step4.styled';

import novaPoshta from 'images/svg/Nova_Poshta.svg';
import ukrPoshta from 'images/svg/ukrposhta-logo.svg';
import curier from 'images/delivery/pngegg.png';
import mastercard from 'images/svg/mastercard.svg';
import visa from 'images/svg/visa.svg';
import wallet from 'images/svg/wallet.svg';

const Step4 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const auth = useSelector(getUser);
  const { userIn } = useAuth();

  const [formData] = useState(
    getFromStorage('formData')
      ? getFromStorage('formData')
      : {
          name: auth._id ? userIn.address.userName : '',
          surname: auth._id ? userIn.address.surname : '',
          company: auth._id ? userIn.address.company : '',
          email: auth._id ? userIn.address.email : '',
          phone: auth._id ? userIn.address.phone : '',
          address1: auth._id ? userIn.address.address1 : '',
          address2: auth._id ? userIn.address.address2 : '',
          city: auth._id ? userIn.address.city : '',
          state: auth._id ? userIn.address.state : '',
          zipCode: auth._id ? userIn.address.zipCode : '',
        },
  );
  let delivery = '';
  getFromStorage('selectedDeliveryOption')
    ? (delivery = getFromStorage('selectedDeliveryOption'))
    : (delivery = '');

  const [selectedCity] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [selectedDepartment] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [selectedCity_UP_NAME] = useState(
    getFromStorage('selectedCity_UP_NAME')
      ? getFromStorage('selectedCity_UP_NAME')
      : '',
  );
  const [selectedDepartment_UP] = useState(
    getFromStorage('selectedDepartment_UP')
      ? getFromStorage('selectedDepartment_UP')
      : '',
  );

  const [selectedPaymentOption] = useState(
    getFromStorage('selectedPaymentOption')
      ? getFromStorage('selectedPaymentOption')
      : '',
  );

  const [comments, setComments] = useState(
    getFromStorage('comments') ? getFromStorage('comments') : '',
  );
  const [showComments, setShowComments] = useState(false);

  const { contextBasket, setContextBasket } = useContext(StatusContext);

  let cityDelivery = '';
  let departmentDelivery = '';
  if (delivery === 'NovaPoshta') {
    cityDelivery = selectedCity;
    departmentDelivery = selectedDepartment;
  } else if (delivery === 'UkrPoshta') {
    cityDelivery = selectedCity_UP_NAME;
    departmentDelivery = selectedDepartment_UP;
  } else {
    cityDelivery = formData.city;
    departmentDelivery = formData.address1;
    departmentDelivery = formData.address2;
  }

  const totalPayment = contextBasket[0]?.optionData
    .reduce((payment, item) => {
      return payment + item.newPrice * item.quantity;
    }, 0)
    .toFixed(2);
  const totalAmount = contextBasket[0]?.optionData
    .reduce((payment, item) => {
      return payment + item.oldPrice * item.quantity;
    }, 0)
    .toFixed(2);
  // const totalDiscount = contextBasket[0]?.optionData
  //   .reduce((payment, item) => {
  //     return payment + item.discount * item.quantity;
  //   }, 0)
  //   .toFixed(2);

  const currency = contextBasket[0]?.optionData[0].currency;

  const newOrder = {
    basket: { ...contextBasket[0] },
    totalAmount: Math.round(+totalAmount * 100) / 100,
    // totalDiscount: Math.round(+totalDiscount * 100) / 100,
    totalPayment: Math.round(+totalPayment * 100) / 100,
    currency,
    deliveryOrder: { delivery, cityDelivery, departmentDelivery },
    name: formData.name + ' ' + formData.surname,
    company: formData.company,
    city: formData.city,
    state: formData.state,
    phone: formData.phone,
    email: formData.email,
    address1: formData.address1,
    address2: formData.address2,
    zipCode: formData.zipCode,
    selectedPaymentOption,
    comments,
    user_id: auth._id,
  };

  const navigate = useNavigate();

  async function createOrder() {
    setIsLoading(true);
    try {
      const { data } = await makeOrder(`/order/`, newOrder);
      navigate('/shop/plants?perPage=12&page=1', { replace: true });
      setContextBasket([]);
      if (!data) {
        return onFetchError(t('Whoops, something went wrong'));
      }
      onSuccess('Thank you for order');
      removeItem('step');
      removeItem('sort');
      removeItem('basketData');
      removeItem('selectedCity');
      removeItem('selectedCity_UP_NAME');
      removeItem('comments');
      removeItem('selectedCity_UP');
      removeItem('selectedDepartment_UP');
      removeItem('basketData');
      removeItem('selectedDeliveryOption');
      removeItem('selectedDepartment');
      removeItem('formData');
      removeItem('selectedPaymentOption');
      dispatch(clearBasket());
      dispatch(addReload(true));
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const handleAddOrder = e => {
    createOrder();
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <TotalBasket>
      <Basket
        handleAddOrder={handleAddOrder}
        confirm={true}
        isClosed={'isClosed'}
      ></Basket>
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <DataContainerItem>
        {/* Delivery */}
        <DataContainerItems>
          <DataTitle>Selected delivery</DataTitle>
          <DataContainerTextBox $row>
            {delivery === 'NovaPoshta' && (
              <img style={{ width: 30 }} src={novaPoshta} alt="NovaPoshta" />
            )}
            {delivery === 'UkrPoshta' && (
              <img style={{ width: 30 }} src={ukrPoshta} alt="UkrPoshta" />
            )}
            {delivery === 'Courier delivery' && (
              <img style={{ width: 30 }} src={curier} alt="Courier delivery" />
            )}
            <DataContainerText>{delivery}</DataContainerText>
          </DataContainerTextBox>
          {delivery === 'NovaPoshta' && (
            <>
              <DataContainerText>{selectedCity}</DataContainerText>
              <DataContainerText>{selectedDepartment}</DataContainerText>
            </>
          )}
          {delivery === 'UkrPoshta' && (
            <>
              <DataContainerText>{selectedCity_UP_NAME}</DataContainerText>
              <DataContainerText>{selectedDepartment_UP}</DataContainerText>
            </>
          )}
          <DataContainerPensil
            onClick={() => navigate('/checkout/step1', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Reciver */}
        <DataContainerItems>
          <DataTitle>Selected customer options</DataTitle>

          <DataContainerTextBox>
            <DataContainerText>
              {formData.name} {formData.surname}
            </DataContainerText>
            {formData.company && (
              <DataContainerText>{formData.company}</DataContainerText>
            )}
            {formData.address1 && (
              <DataContainerText>
                {formData.address1} {formData.address2}
              </DataContainerText>
            )}
            {formData.city && formData.state && formData.zipCode && (
              <DataContainerText>
                {formData.city}, {formData.state}, {formData.zipCode}
              </DataContainerText>
            )}
            <DataContainerText>{formData.phone}</DataContainerText>
            <DataContainerText>{formData.email}</DataContainerText>
          </DataContainerTextBox>

          <DataContainerPensil
            onClick={() => navigate('/checkout/step2', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Payment */}
        <DataContainerItems>
          <DataTitle>Selected payment</DataTitle>
          <DataContainerTextBox $row>
            {selectedPaymentOption === 'Payment by bank card' ? (
              <>
                <img
                  style={{ width: 20 }}
                  src={mastercard}
                  alt="Payment by bank card"
                />
                <img
                  style={{ width: 20 }}
                  src={visa}
                  alt="Payment by bank card"
                />
              </>
            ) : (
              <img
                style={{ width: 30 }}
                src={wallet}
                alt="Payment on account or Cash on delivery"
              />
            )}
            <DataContainerText>{selectedPaymentOption}</DataContainerText>
          </DataContainerTextBox>
          <DataContainerPensil
            onClick={() => navigate('/checkout/step3', { replace: true })}
          >
            <PensilStyle />
          </DataContainerPensil>
        </DataContainerItems>

        {/* Comments */}
        <DataContainerItems style={{ wordBreak: 'break-all' }}>
          <DataTitle>Comments to order</DataTitle>
          {!showComments && <DataContainerText>{comments}</DataContainerText>}
          <DataContainerPensil onClick={() => setShowComments(!showComments)}>
            {showComments ? <DataContainerCheckMark /> : <PensilStyle />}
          </DataContainerPensil>
          {showComments && (
            <label htmlFor="comments">
              <InputComments
                onChange={e => {
                  setComments(e.target.value);
                  saveToStorage('comments', e.target.value);
                }}
                type="text"
                id="comments"
                name="comments"
                value={comments}
                rows="6"
                cols="25"
              />
            </label>
          )}
        </DataContainerItems>
      </DataContainerItem>
    </TotalBasket>
  );
};

export default Step4;
