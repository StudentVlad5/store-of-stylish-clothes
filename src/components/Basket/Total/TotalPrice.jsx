import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import {
  DeliverBox,
  DeliverBoxItem,
  Done,
  PaymentBox,
  PaymentBtn,
  PaymentTotal,
  PaymentTotalList,
  PaymentTotalListItem,
  PaymentTotalListItemDiscr,
  PaymentTotalListItemTitle,
  PaymentTotalTitle,
  PaymentTotalTitlePrice,
  PaymentTotalTitlePriceDiscr,
  ShippingFast,
} from './TotalPrice.styled';
import { useTranslation } from 'react-i18next';

export const TotalPrice = basket => {
  const {t} = useTranslation();
  const { confirm, handleAddOrder } = basket;

  const totalPayment = basket.contextBasket
    .reduce((payment, item) => {
      return payment + item.newPrice * item.quantity;
    }, 0)
    .toFixed(2);
  const totalAmount = basket.contextBasket
    .reduce((payment, item) => {
      return payment + item.oldPrice * item.quantity;
    }, 0)
    .toFixed(2);
  const totalDiscount = (totalAmount - totalPayment).toFixed(2);
  // const totalDiscount = basket.contextBasket
  //   .reduce((payment, item) => {
  //     return payment + item.discount * item.quantity;
  //   }, 0)
  //   .toFixed(2);

  const currency = basket?.contextBasket[0]?.currency;

  return (
    <PaymentBox>
      <PaymentTotal>
        <PaymentTotalTitle>{t("Total")}</PaymentTotalTitle>
        <table>
          <PaymentTotalList>
            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                {t("Amount for the product")}
              </PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                <b>{totalAmount}</b>
                {currency}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem>
            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>{t("Discount")}</PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                <b>{totalDiscount}</b>
                {currency}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalTitle>{t("Payment")}</PaymentTotalTitle>
              <PaymentTotalTitle>
                {totalPayment}
                {currency}
              </PaymentTotalTitle>
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                {t("Delivery in Ukraine")}
              </PaymentTotalListItemTitle>
              {currency === '₴' && (
                <PaymentTotalListItemDiscr>
                  {t("from")} <b>70</b> {currency}
                </PaymentTotalListItemDiscr>
              )}
              {currency !== '₴' && (
                <PaymentTotalListItemDiscr>
                  {t("from")} <b>2</b> {currency}
                </PaymentTotalListItemDiscr>
              )}
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                {t("Shipping to other countries")}
              </PaymentTotalListItemTitle>
              {currency === '₴' && (
                <PaymentTotalListItemDiscr>
                  {' '}
                  {t("from")} <b>1000</b> {currency}
                </PaymentTotalListItemDiscr>
              )}
              {currency !== '₴' && (
                <PaymentTotalListItemDiscr>
                  {' '}
                  {t("from")} <b>25</b> {currency}
                </PaymentTotalListItemDiscr>
              )}
            </PaymentTotalListItem>
          </PaymentTotalList>
        </table>
      </PaymentTotal>
      {confirm ? (
        <PaymentBtn onClick={handleAddOrder} id="paymentBtn">
          {t("confirm")}
        </PaymentBtn>
      ) : (
        <PaymentBtn to={`/checkout/step1`} id="paymentBtn">
          {t("checkout")}
        </PaymentBtn>
      )}
      {!confirm && (
        <DeliverBox>
          <DeliverBoxItem>
            <ShippingFast />
            {t("The delivery time in Ukraine is from 4-5 days")}
          </DeliverBoxItem>
          <DeliverBoxItem>
            <Done />
            {t("the delivery time in Europe is from 14 days")}
          </DeliverBoxItem>
        </DeliverBox>
      )}
    </PaymentBox>
  );
};

TotalPrice.propTypes = {
  basket: PropTypes.object,
  confirm: PropTypes.bool,
  handleAddOrder: PropTypes.func,
};