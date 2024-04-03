import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getUser } from 'redux/auth/selectors';
import { TotalPrice } from './Total/TotalPrice';
import {
  BasketSection,
  BasketContainer,
  TitleCheckOut,
  TextCheckOut,
  Btn,
  Legend,
  AuthCheckOutBox,
  BasketCompList,
  BasketWrapper,
} from './Basket.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { ShoppingBagList } from 'components/Header/ShoppingBag/ShoppingBagList/ShoppingBagList';
import { BtnLight } from 'components/UserComp/UserData/UserData.styled';
import { useTranslation } from 'react-i18next';

export const Basket = ({ confirm, handleAddOrder, isClosed }) => {
  const { t } = useTranslation();
  const auth = useSelector(getUser);
  const { contextBasket, setContextBasket } = useContext(StatusContext);

  return (
    <BasketSection>
      <BasketContainer>
        <Legend>{t('Basket')}</Legend>
        {contextBasket && contextBasket[0]?.optionData?.length !== undefined ? (
          <BasketWrapper>
            <BasketCompList>
              {contextBasket[0]?.optionData?.map((product, idx) => (
                <ShoppingBagList
                  key={`${idx}${product?.quantity}${product?._id}`}
                  datas={contextBasket}
                  idx={idx}
                  setDatas={setContextBasket}
                  optionData={product}
                  statusBasket={true}
                />
              ))}
            </BasketCompList>

            <TotalPrice
              contextBasket={contextBasket[0]?.optionData}
              confirm={confirm}
              handleAddOrder={handleAddOrder}
            />
          </BasketWrapper>
        ) : (
          <AuthCheckOutBox>
            <TitleCheckOut>{t('YOUR Basket is empty')}</TitleCheckOut>
            <TextCheckOut>{t('Please add an item to checkout')}</TextCheckOut>
            <Link to="/shop" style={{ textDecoration: 'none' }}>
              <Btn>{t('Shop')}</Btn>
            </Link>
          </AuthCheckOutBox>
        )}
        {!auth._id &&
          contextBasket &&
          contextBasket[0]?.optionData?.length !== undefined &&
          contextBasket[0]?.optionData?.length !== 0 && (
            <AuthCheckOutBox isClosed={isClosed}>
              <TitleCheckOut>
                {t('For quick ordering and saving order history')}
              </TitleCheckOut>
              <TextCheckOut>
                {t('Make sure you’re signed into your account')}
              </TextCheckOut>
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                <BtnLight>{t('SIGN IN')}</BtnLight>
              </Link>
              {!contextBasket &&
                contextBasket[0]?.optionData?.length == undefined &&
                contextBasket[0]?.optionData?.length == 0 && (
                  <>
                    <TitleCheckOut>{t('YOUR Basket is empty')}</TitleCheckOut>
                    <TextCheckOut>
                      {t('Please add an item to checkout')}
                    </TextCheckOut>
                    <Link
                      to="/shop?perPage=12&page=1"
                      style={{ textDecoration: 'none' }}
                    >
                      <BtnLight>{t('Shop')}</BtnLight>
                    </Link>
                  </>
                )}
            </AuthCheckOutBox>
          )}
      </BasketContainer>
    </BasketSection>
  );
};

Basket.propTypes = {
  confirm: PropTypes.bool,
  handleAddOrder: PropTypes.func,
};
