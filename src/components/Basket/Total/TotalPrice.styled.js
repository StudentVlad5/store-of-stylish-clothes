import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as done } from 'images/svg/done.svg';
import { ReactComponent as shippingFast } from 'images/svg/shipping-fast.svg';

export const PaymentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 40%;
    min-width: 300px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 500px;
  }
`;

export const PaymentTotal = styled.div`
  display: flex;
  flex-direction: column;

  padding: 15px;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.6);
`;

export const PaymentTotalTitle = styled.td`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-bottom: 11px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;
export const PaymentTotalTitleH4 = styled.h4`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-bottom: 11px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 15px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const PaymentBoxOrder = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PaymentTotalList = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`;

export const PaymentTotalListItem = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const PaymentTotalListItemTitle = styled.th`
  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const PaymentTotalListItemDiscr = styled.td`
  /* width: 90px; */

  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-align: start;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const PaymentTotalTitlePrice = styled.th`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const PaymentTotalTitlePriceDiscr = styled(PaymentTotalListItemDiscr)`
  color: ${theme.colors.brown1};
  font-size: 12px;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const PaymentBtn = styled(Link)`
  width: 100%;
  padding: 15px;

  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  border-radius: 10px;
  border: 1px solid ${theme.colors.brown4};
  background-color: transparent;
  cursor: pointer;
  transition: ${theme.transition[1]};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.fon};
    background: ${theme.colors.brown4};
    transition: ${theme.transition[1]};

    /* border-radius: 10px;
    border: 1px solid ${theme.colors.green2};
    background: ${theme.colors.green5}; */
  }
`;

export const DeliverBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    align-items: flex-start;
  }
`;

export const DeliverBoxItem = styled.p`
  display: flex;
  align-items: center;
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 8px;
  font-style: normal;
  font-weight: 300;
  line-height: 160%; /* 19.2px */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 12px;
  }
`;

export const Done = styled(done)`
  margin-right: 14px;
`;

export const ShippingFast = styled(shippingFast)`
  margin-right: 14px;
`;
