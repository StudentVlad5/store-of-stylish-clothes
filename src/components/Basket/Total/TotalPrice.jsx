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

export const TotalPrice = basket => {
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
  // const totalDiscount = basket.contextBasket
  //   .reduce((payment, item) => {
  //     return payment + item.discount * item.quantity;
  //   }, 0)
  //   .toFixed(2);

  const currency = basket?.contextBasket[0]?.currency;

  return (
    <PaymentBox>
      <PaymentTotal>
        <PaymentTotalTitle>Total</PaymentTotalTitle>
        <table>
          <PaymentTotalList>
            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                Amount for the product
              </PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                {totalAmount}
                {currency}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem>

            {/* <PaymentTotalListItem>
              <PaymentTotalListItemTitle>
                Discount amount
              </PaymentTotalListItemTitle>
              <PaymentTotalListItemDiscr>
                {currency}
                {totalDiscount}
              </PaymentTotalListItemDiscr>
            </PaymentTotalListItem> */}

            <PaymentTotalListItem>
              <PaymentTotalListItemTitle>Delivery</PaymentTotalListItemTitle>
              {/* {totalPayment < 150 ? (
                <PaymentTotalListItemDiscr>
                  {currency}
                  {150 - totalPayment}
                </PaymentTotalListItemDiscr>
              ) : ( */}
                <PaymentTotalListItemDiscr>13</PaymentTotalListItemDiscr>
              {/* )} */}
            </PaymentTotalListItem>

            <PaymentTotalListItem>
              <PaymentTotalTitle>Payment</PaymentTotalTitle>
              <PaymentTotalTitle>
                {totalPayment}
                {currency}
              </PaymentTotalTitle>
            </PaymentTotalListItem>
          </PaymentTotalList>
        </table>
      </PaymentTotal>
      {confirm ? (
        <PaymentBtn onClick={handleAddOrder} id="paymentBtn">
          confirm
        </PaymentBtn>
      ) : (
        <PaymentBtn to={`/checkout/step1`} id="paymentBtn">
          checkout
        </PaymentBtn>
      )}
      {/* {!confirm && (
        <DeliverBox>
          <DeliverBoxItem>
            <ShippingFast />
            Get free standart shipping when you spend $150 or more.
          </DeliverBoxItem>
          <DeliverBoxItem>
            <Done />
            If your plant dies withing 30 days, we’ll replace it for free.
          </DeliverBoxItem>
        </DeliverBox>
      )} */}
    </PaymentBox>
  );
};

TotalPrice.propTypes = {
  basket: PropTypes.object,
  confirm: PropTypes.bool,
  handleAddOrder: PropTypes.func,
};
