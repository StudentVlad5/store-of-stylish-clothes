import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as novaPoshta } from 'images/svg/Nova_Poshta.svg';
import { ReactComponent as ukrposhta } from 'images/svg/ukrposhta-logo.svg';
import { ReactComponent as liqpay } from 'images/svg/LIQPAY.svg';
import { ReactComponent as wallet } from 'images/svg/wallet.svg';
import { ReactComponent as checkMark } from 'images/svg/check-mark.svg';
import { ProfileContainer } from 'components/UserComp/UserData/UserData.styled';
import { IconBtn } from 'components/Catalog/Catalog.styled';

export const DataContainer = styled(ProfileContainer)`
  /* width: 590px; */
  background-color: ${theme.colors.green6};
`;

export const DataContainerText = styled.p`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:first-child {
    color: ${theme.colors.green};
  }
`;

export const DataContainerPensil = styled(IconBtn)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

export const DataContainerCheckMark = styled(checkMark)`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 18px;
      height: 18px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 24px;
      height: 24px;
    }
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;

export const DeliverySection = styled(Section)`
  padding-top: 170px;
`;

export const Delivery = styled.div``;

export const DeliveryInfoBox = styled.div``;

export const DeliveryInfoBoxTitle = styled.h2`
  color: rgb(95, 74, 50);
  margin-bottom: 20px;

  font-family: ${theme.fonts[1]};
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const DeliveryBlock = styled.div`
  /* display: flex; */
  /* align-items: center; */
  /* flex-direction: column; */
`;

export const DeliveryBlockOptions = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const DeliveryBlockOptionsBoxLable = styled.div`
  background-color: ${theme.colors.green6};
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1200px;
  }
`;

export const DeliveryBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 20px;
  cursor: pointer;

  & input[type='radio']::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #6f8d4c;
    display: inline-block;
  }
`;

export const DeliveryBlockOptionsInput = styled.input`
  appearance: none;

  &:checked::before {
    content: '';
    background-color: #6f8d4c;
    width: 1px;
    height: 1px;
    display: inline-block;
  }
`;

export const NovaPoshtaIcon = styled(novaPoshta)``;
export const UkrPoshtaIcon = styled(ukrposhta)``;

export const DeliveryBlockOptionsLableBox = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
  /* width: 100%; */
  /* padding-bottom: 20px; */

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  } */
`;

export const DeliveryBlockOptionsTitle = styled.span`
  color: ${theme.colors.brown1};

  /* margin-bottom: 14px; */
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

export const DeliveryBlockOptionsTitleDiscr = styled.span`
  color: ${theme.colors.brown1};

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const DeliveryInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }
`;

export const DeliveryForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  width: 100%;
  margin-top: 20px;
`;

export const DeliveryFormLable = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: ${theme.breakpoints.desktop_max}) {
    width: 100%;
  }
`;

export const DeliveryFormLableText = styled.span`
  margin-bottom: 8px;
  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }
`;

export const DeliveryFormLableTextSpan = styled.span`
  color: red;
  font-size: 20px;
`;

export const DeliveryFormInput = styled.input`
  width: 100%;
  padding: 8px 30px 8px 20px;

  color: ${theme.colors.green};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  border: 1px solid #c6cdd3;
  border-color: transparent;
  border-radius: 10px;
  background: ${theme.colors.blue3};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 580px;
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &:hover,
  &:focus,
  &:visited,
  &:focus-visible {
    border: 1px solid ${theme.colors.green};
  }

  &::placeholder {
    color: ${theme.colors.green};
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
  }
`;

export const Btnwrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 580px;
  }
`;

export const DeliveryFormBtn = styled.button`
  width: 150px;
  height: 35px;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  border-radius: 10px;
  border: 1px solid ${theme.colors.brown1};
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 190px;
    height: 45px;
    font-size: 14px;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    border: 1px solid ${theme.colors.green};
    background-color: ${theme.colors.green};
  }
`;

export const DeliveryFormBtnFinish = styled(DeliveryFormBtn)`
  background: ${theme.colors.green4};
  border: 1px solid ${theme.colors.green4};
  &:disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }
`;
export const BoxPost = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 20px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0px;
    height: 0.5px;
    width: 100%;
    background: ${theme.colors.brown1};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 1200px;
    }
  }
`;

export const PoshtaBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 22px;
`;

export const PoshtaBoxTitle = styled.p`
  display: inline-block;

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

export const PoshtaTitle = styled.p`
  display: inline-block;
  margin-bottom: 8px;

  color: ${theme.colors.darkGreen};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
`;

export const PaymentOptionBox = styled.div`
  padding: 20px;
  background-color: ${theme.colors.green6};
`;

export const LIQPAY = styled(liqpay)``;
export const Wallet = styled(wallet)``;

export const PaymentFormBtnBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const PaymentFormBtn = styled(DeliveryFormBtn)`
  padding: 10px 12px;
  margin-top: 0;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 285px;
    height: 45px;
  }
`;

export const PaymentFormBtnFinish = styled(PaymentFormBtn)`
  background: ${theme.colors.green4};
  border: 1px solid ${theme.colors.green4};
  &:disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }
`;

export const DeliveryBlockOptionsBtn = styled(PaymentFormBtn)`
  margin-top: 24px;
  margin-right: 0;
`;

export const PaymentBlockOptionsLable = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 20px;
  background-color: ${theme.colors.green6};
  cursor: pointer;

  & input[type='radio']::before {
    content: '';
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 2px solid #6f8d4c;
    display: inline-block;
  }
`;

export const PaymentBlockOptionsInput = styled.input`
  appearance: none;

  &:checked::before {
    content: '';
    background-color: #6f8d4c;
    width: 1px;
    height: 1px;
    display: inline-block;
  }
`;
