import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';

import { ReactComponent as iconMenu } from 'images/svg/icon_menu.svg';

const Burger = styled(iconMenu)`
  cursor: pointer;
  fill: ${theme.colors.brown1};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const MobileMenuSection = styled.div`
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 999;
  transform: translateX(100%);
  transition: transform 250ms ease-in-out;
  display: flex;
  flex-direction: column;
  background-color: ${theme.colors.white};
  overflow: hidden;

  &.is-expanded {
    transform: translateX(0);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export { Burger, MobileMenuSection };
