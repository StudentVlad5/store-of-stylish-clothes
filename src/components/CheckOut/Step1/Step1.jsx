import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckoutBtn } from '../Checkout.styled';
import { saveToStorage, getFromStorage } from 'services/localStorService';
import {
  DeliveryBlockOptions,
  DeliveryBlockOptionsLable,
  DeliveryBlockOptionsInput,
  UkrPoshtaIcon,
  NovaPoshtaIcon,
  PoshtaBox,
  DeliveryBlockOptionsBoxLable,
  PoshtaBoxTitle,
  BoxPost,
  DeliveryBlockOptionsTitleDiscr,
  DeliveryBlockOptionsLableBox,
  DeliveryBlockOptionsTitle,
  DeliveryBlockOptionsBoxLableLast,
} from '../Order/Order.styled';
import { NovaPoshta } from 'components/Delivery/NovaPoshta/NovaPoshta';
import { UkrPoshta } from 'components/Delivery/UkrPoshta/UkrPoshta';
import curier from 'images/delivery/pngegg.png';
import { useAuth } from 'hooks/useAuth';
import { useTranslation } from 'react-i18next';

const Step1 = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const { userIn } = useAuth();
  const { t } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState(
    getFromStorage('selectedCountry') ? getFromStorage('selectedCountry') : '',
  );
  const [selectedCity, setSelectedCity] = useState(
    getFromStorage('selectedCity') ? getFromStorage('selectedCity') : '',
  );
  const [selectedDepartment, setSelectedDepartment] = useState(
    getFromStorage('selectedDepartment')
      ? getFromStorage('selectedDepartment')
      : '',
  );
  const [selectedCity_UP, setSelectedCity_UP] = useState(
    getFromStorage('selectedCity_UP') ? getFromStorage('selectedCity_UP') : '',
  );
  const [selectedCity_UP_NAME, setSelectedCity_UP_NAME] = useState(
    getFromStorage('selectedCity_UP_NAME')
      ? getFromStorage('selectedCity_UP_NAME')
      : '',
  );
  const [selectedDepartment_UP, setSelectedDepartment_UP] = useState(
    getFromStorage('selectedDepartment_UP')
      ? getFromStorage('selectedDepartment_UP')
      : '',
  );
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState(
    getFromStorage('selectedDeliveryOption')
      ? getFromStorage('selectedDeliveryOption')
      : '',
  );
  const [isDisabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = index => {
    const selectedDeliveryOption = deliveryOptions[index].label;
    setSelectedDeliveryOption(selectedDeliveryOption);
  };

  const deliveryOptions = [
    { value: 'NovaPoshta', label: 'NovaPoshta' },
    { value: 'UkrPoshta', label: 'UkrPoshta' },
    { value: 'Courier delivery', label: 'Courier delivery' },
  ];

  useEffect(() => {
    if (
      selectedDeliveryOption === 'Courier delivery' ||
      (selectedDeliveryOption === 'NovaPoshta' &&
        selectedCity !== '' &&
        selectedDepartment !== '' &&
        selectedCity &&
        selectedDepartment) ||
      (selectedDeliveryOption === 'UkrPoshta' &&
        selectedCity_UP &&
        selectedDepartment_UP &&
        selectedCity_UP !== '' &&
        selectedDepartment_UP !== '')
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [
    selectedDeliveryOption,
    selectedCity,
    selectedDepartment,
    selectedCity_UP,
    selectedDepartment_UP,
  ]);

  const nextStep = () => {
    saveToStorage('selectedCountry', selectedCountry);
    saveToStorage('selectedCity', selectedCity);
    saveToStorage('selectedCity_UP', selectedCity_UP);
    saveToStorage('selectedCity_UP_NAME', selectedCity_UP_NAME);
    saveToStorage('selectedDepartment', selectedDepartment);
    saveToStorage('selectedDepartment_UP', selectedDepartment_UP);
    saveToStorage('selectedDeliveryOption', selectedDeliveryOption);
    navigate('/checkout/step2', { replace: true });
    saveToStorage('step', '2');
  };

  useEffect(() => {
    if (
      userIn.delivery === 'NovaPoshta' ||
      userIn.delivery === 'UkrPoshta' ||
      userIn.delivery === 'Courier delivery'
    ) {
      setSelectedDeliveryOption(userIn.delivery);
    }
  }, [userIn.delivery]);

  const handleSelectCountry = e => {
    e.preventDefault;
    saveToStorage('selectedCountry', e.target.value);
    setSelectedCountry(e.target.value);
  };

  return (
    <DeliveryBlockOptions>
      <DeliveryBlockOptionsBoxLable>
        <DeliveryBlockOptionsLable>
          <DeliveryBlockOptionsInput
            type="radio"
            name="country"
            value="Ukraine"
            checked={selectedCountry === 'Ukraine'}
            onChange={e => handleSelectCountry(e)}
          />
          <DeliveryBlockOptionsLableBox>
            <DeliveryBlockOptionsTitle>
              {t('Ukraine')}
            </DeliveryBlockOptionsTitle>
            <DeliveryBlockOptionsTitleDiscr>
              {t('Delivery in Ukraine')}
            </DeliveryBlockOptionsTitleDiscr>
          </DeliveryBlockOptionsLableBox>
        </DeliveryBlockOptionsLable>
        <DeliveryBlockOptionsLable>
          <DeliveryBlockOptionsInput
            type="radio"
            name="country"
            checked={selectedCountry === 'other'}
            value="other"
            onChange={e => handleSelectCountry(e)}
          />
          <DeliveryBlockOptionsLableBox>
            <DeliveryBlockOptionsTitle>
              {t('Other country')}
            </DeliveryBlockOptionsTitle>
            <DeliveryBlockOptionsTitleDiscr>
              {t('Delivery to the countries of Europe, Asia, the USA, etc')}
            </DeliveryBlockOptionsTitleDiscr>
          </DeliveryBlockOptionsLableBox>
        </DeliveryBlockOptionsLable>
      </DeliveryBlockOptionsBoxLable>
      {selectedCountry === 'Ukraine' && (
        <DeliveryBlockOptionsBoxLable>
          <DeliveryBlockOptionsLable style={{ marginLeft: '40px' }}>
            <DeliveryBlockOptionsInput
              type="radio"
              name="delivery"
              checked={selectedDeliveryOption === 'NovaPoshta'}
              onChange={() => handleOptionClick(0)}
            />
            <NovaPoshtaIcon />

            <DeliveryBlockOptionsLableBox>
              <DeliveryBlockOptionsTitle>
                {t('Nova Poshta')}
              </DeliveryBlockOptionsTitle>
              <DeliveryBlockOptionsTitleDiscr>
                {t('Cash upon delivery, card payment Visa, Master Card')}
              </DeliveryBlockOptionsTitleDiscr>
            </DeliveryBlockOptionsLableBox>
          </DeliveryBlockOptionsLable>

          {selectedDeliveryOption === 'NovaPoshta' && (
            <BoxPost style={{ width: '100%' }}>
              <PoshtaBoxTitle>
                {t('Select point office (In ukrainian)')}
              </PoshtaBoxTitle>

              <PoshtaBox>
                <NovaPoshta
                  setSelectedCity={setSelectedCity}
                  setSelectedDepartment={setSelectedDepartment}
                />
              </PoshtaBox>
            </BoxPost>
          )}
        </DeliveryBlockOptionsBoxLable>
      )}
      {selectedCountry === 'Ukraine' && (
        <DeliveryBlockOptionsBoxLable>
          <DeliveryBlockOptionsLable style={{ marginLeft: '40px' }}>
            <DeliveryBlockOptionsInput
              type="radio"
              name="delivery"
              checked={selectedDeliveryOption === 'UkrPoshta'}
              onChange={() => handleOptionClick(1)}
            />
            <UkrPoshtaIcon />

            <DeliveryBlockOptionsLableBox>
              <DeliveryBlockOptionsTitle>
                {t('Ukr Poshta')}
              </DeliveryBlockOptionsTitle>
              <DeliveryBlockOptionsTitleDiscr>
                {t('Cash upon delivery, card payment Visa, Master Card')}
              </DeliveryBlockOptionsTitleDiscr>
            </DeliveryBlockOptionsLableBox>
          </DeliveryBlockOptionsLable>

          {selectedDeliveryOption === 'UkrPoshta' && (
            <BoxPost>
              <PoshtaBoxTitle>
                {t('Select point office (In ukrainian)')}
              </PoshtaBoxTitle>

              <PoshtaBox>
                <UkrPoshta
                  setSelectedCity={setSelectedCity_UP}
                  setSelectedDepartment={setSelectedDepartment_UP}
                  setSelectedCity_UP_NAME={setSelectedCity_UP_NAME}
                  selectedCity_UP_NAME={selectedCity_UP_NAME}
                />
              </PoshtaBox>
            </BoxPost>
          )}
        </DeliveryBlockOptionsBoxLable>
      )}
      {selectedCountry && (
        <DeliveryBlockOptionsBoxLableLast>
          <DeliveryBlockOptionsLable style={{ marginLeft: '40px' }}>
            <DeliveryBlockOptionsInput
              type="radio"
              name="delivery"
              checked={selectedDeliveryOption === 'Courier delivery'}
              onChange={() => handleOptionClick(2)}
            />
            <img style={{ width: 55 }} src={curier} alt="Courier delivery" />
            <DeliveryBlockOptionsLableBox>
              <DeliveryBlockOptionsTitle>
                {t('Courier delivery')}
              </DeliveryBlockOptionsTitle>
              <DeliveryBlockOptionsTitleDiscr>
                {t('Cash upon delivery, card payment Visa, Master Card')}
              </DeliveryBlockOptionsTitleDiscr>
            </DeliveryBlockOptionsLableBox>
          </DeliveryBlockOptionsLable>
        </DeliveryBlockOptionsBoxLableLast>
      )}
      <CheckoutBtn disabled={isDisabled} type="button" onClick={nextStep}>
        Next
      </CheckoutBtn>
    </DeliveryBlockOptions>
  );
};

export default Step1;
