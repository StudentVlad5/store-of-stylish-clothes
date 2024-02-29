import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as LogoutIcon } from 'images/svg/logout.svg';

export const LogoutBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  width: 110px;
  padding: 12px 0;

  border-radius: 5px;
  border: 1px solid ${theme.colors.green4};
  color: ${theme.colors.brown1};
  background-color: ${theme.colors.green4};

  cursor: pointer;
  transition: ${theme.transition[1]};

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 150px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 285px;
    /* padding: 32px 0; */
  }

  &:hover,
  &:focus,
  &:hover > svg,
  &:focus > svg {
    border: 1px solid ${theme.colors.green};
    color: ${theme.colors.white};
    background-color: ${theme.colors.green};

    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
    transition: ${theme.transition[1]};
  }
`;

export const LogoutIconStyled = styled(LogoutIcon)`
  width: 10px;
  height: 10px;
  stroke: ${theme.colors.brown1};
  transition: ${theme.transition[1]};

  &:hover,
  :focus {
    fill: ${theme.colors.white};
    stroke: ${theme.colors.white};
  }
`;

export const LogoutBtnText = styled.span`
  text-decoration: none;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;

  @media (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: rgba(17, 17, 17, 0.6);
  z-index: 100;
  width: 100vw;
  height: 100vh;
`;
