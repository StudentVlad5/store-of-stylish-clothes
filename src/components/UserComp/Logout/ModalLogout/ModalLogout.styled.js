import styled from 'styled-components';
import { ReactComponent as Close } from '../../../../images/svg/icon_close.svg';
import theme from 'components/baseStyles/Variables.styled';
import { Button } from 'components/helpers/ButtonSplit/ButtonSplit.styled';

export const ModalWrapper = styled.div`
  position: absolute;
  /* width: 90%; */
  background-color: ${theme.colors.white};
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-radius: 20px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseBtnWrapper = styled.div`
  position: relative;
`;

export const ModalCloseBtn = styled(Button)`
  position: absolute;
  right: 100px;
  top: -30px;
  right: -30px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-color: transparent;
  border-radius: 50%;
  width: 34px;
  height: 34px;
  cursor: pointer;
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  :hover svg {
    fill: ${theme.colors.white};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 44px;
    height: 44px;
    right: -30px;
  }
`;

export const CloseIcon = styled(Close)`
  width: 16px;
  height: 16px;
  fill: ${theme.colors.brown};
  transform: all 150ms linear;
  transition: all 0.25s ease-in;
  &:hover,
  :focus {
    fill: ${theme.colors.white};
  }
`;

export const ModalDescription = styled.p`
  color: ${theme.colors.brown2};
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 28px;
  padding-left: 24px;
  padding-right: 24px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 20px;
    line-height: 1.2;
    letter-spacing: -0.01em;
  }
`;
export const ModalButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const ModalButton = styled(Button)`
  width: 100px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  text-align: center;
  text-transform: uppercase;
  line-height: normal;
  border-radius: 12px;
  border: 1px solid ${theme.colors.brown4};
  color: ${theme.colors.brown4};
  background-color: transparent;
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.brown4};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.large};
  }
`;
