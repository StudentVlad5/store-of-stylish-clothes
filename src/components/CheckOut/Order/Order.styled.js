import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Section } from 'components/baseStyles/CommonStyle.styled';
import { ReactComponent as novaPoshta } from 'images/svg/Nova_Poshta.svg';
import { ReactComponent as ukrposhta } from 'images/svg/ukrposhta-logo.svg';
import { ReactComponent as mastercard } from 'images/svg/mastercard.svg';
import { ReactComponent as visa } from 'images/svg/visa.svg';
import { ReactComponent as wallet } from 'images/svg/wallet.svg';
import { ReactComponent as checkMark } from 'images/svg/check-mark.svg';
import { ProfileContainer } from 'components/UserComp/UserData/UserData.styled';
import { IconBtn } from 'components/Catalog/Catalog.styled';

export const DataContainer = styled(ProfileContainer)`
  /* width: 590px; */
  border: 1px solid ${theme.colors.brown4};
  background-color: transparent;
`;

export const DataContainerText = styled.p`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  &:first-child {
    color: ${theme.colors.green};
    font-size: 15px;
    font-weight: 500;
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
  background-color: transparent;
  width: 100%;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1200px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.brown4};
  }

  &:last-child {
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: ${theme.colors.brown4};
    }
  }
`;

export const DeliveryBlockOptionsBoxLableLast = styled(
  DeliveryBlockOptionsBoxLable,
)`
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.brown4};
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
    border: 2px solid ${theme.colors.brown4};
    display: inline-block;
  }
`;

export const DeliveryBlockOptionsInput = styled.input`
  appearance: none;

  &:checked::before {
    content: '';
    background-color: ${theme.colors.brown4};
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
  color: ${theme.colors.brown2};

  font-family: ${theme.fonts[0]};
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

export const DeliveryBlockOptionsTitleDiscr = styled.span`
  color: ${theme.colors.brown2};

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
`;

export const DeliveryFormLableTextSpan = styled.span`
  color: red;
  font-size: 20px;
`;

export const DeliveryFormInput = styled.input`
  width: 100%;
  padding: 8px 30px 8px 20px;

  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  border: 1px solid ${theme.colors.brown4};
  border-radius: 10px;
  background: transparent;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 580px;
    padding: 12px 30px 12px 20px;
    font-size: 16px;
  }

  &:hover,
  &:focus {
    border: 1px solid ${theme.colors.brown4};
  }

  &::placeholder {
    color: ${theme.colors.brown2};
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

  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;

  border-radius: 10px;
  border: 1px solid ${theme.colors.brown4};
  background-color: transparent;

  cursor: pointer;
  transition: ${theme.transition[1]};

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
    background-color: ${theme.colors.brown4};
  }
`;

export const DeliveryFormBtnFinish = styled(DeliveryFormBtn)`
  background: ${theme.colors.brown4};
  color: ${theme.colors.white};
  &:disabled {
    cursor: none;
    pointer-events: none;
    opacity: 0.5;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.brown4};
    border: 1px solid ${theme.colors.brown4};
    background-color: transparent;
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

  color: ${theme.colors.brown2};
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

export const Payment = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 20px; */
  width: 100%;
`;

export const PaymentOptionBox = styled.div`
  padding: 20px;
  background-color: ${theme.colors.green6};
`;

export const Mastercard = styled(mastercard)``;
export const Visa = styled(visa)``;

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
  color: ${theme.colors.white};
  background: ${theme.colors.brown4};

  &:hover,
  &:focus {
    color: ${theme.colors.brown4};
    background: transparent;
    border: 1px solid ${theme.colors.brown4};
  }

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

export const PaymentBlockOptionsLableBox = styled.div`
 background-color: transparent;
  width: 100%;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 1200px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.brown4};
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${theme.colors.brown4};
  }


  /* display: flex;
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
  } */
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
