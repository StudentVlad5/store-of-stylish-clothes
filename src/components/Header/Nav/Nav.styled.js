import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../baseStyles/Variables.styled';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.medium};
  text-decoration: none;
  white-space: nowrap;
  text-transform: uppercase;
  margin-top: 60px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 88px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const NavList = styled(MobileNavList)`
  display: none;
  white-space: nowrap;
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    flex-direction: row;
    justify-content: start;
    gap: 82px;
    margin: 0px;
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  font-family: ${theme.fonts[0]};
  font-style: normal;
  font-weight: 500;
  text-transform: uppercase;
  font-size: ${theme.fontSizes.small};
  line-height: normal;
  text-decoration: none;
  white-space: nowrap;
  color: ${theme.colors.brown1};

  &:not(:first-child) {
    margin-top: 40px;
  }
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    &:not(:first-child) {
      margin-top: 60px;
    }
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    &:not(:first-child) {
      margin-top: 0px;
      margin-left: 0px;
    }
  }
  transition: ${theme.transition[0]};
  :focus,
  :hover {
    color: ${theme.colors.darkGreen};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
  &.active {
    color: ${theme.colors.darkGreen};
    transform: ${theme.scale[0]};
    text-shadow: 2px 3px 2px rgba(0, 0, 0, 0.2);
  }
`;

export { MobileNavList, NavList, NavItem };
