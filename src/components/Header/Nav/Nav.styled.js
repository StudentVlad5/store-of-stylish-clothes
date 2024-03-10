import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../baseStyles/Variables.styled';
import { ReactComponent as arrowDown } from 'images/svg/arrowDownNav.svg';

const MobileNavList = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: ${theme.fonts[0]};
  font-size: ${theme.medium};
  text-decoration: none;
  white-space: nowrap;
  text-transform: capitalize;
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
    gap: 40px;
    margin: 0px;
  }
`;

const NavItem = styled(NavLink)`
  cursor: pointer;
  font-family: ${theme.fonts[0]};
  font-style: normal;
  padding: 0 4px;
  font-weight: 500;
  text-transform: capitalize;
  font-size: ${theme.fontSizes.extra};
  line-height: normal;
  text-decoration: none;
  white-space: nowrap;
  color: ${theme.colors.brown1};

  &:after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: -1px;
    width: 0;
    height: 1px; /* Высота линии */
    background-color: ${theme.colors
      .brown3}; /* Цвет подчеркивания при исчезании линии*/
    transition: width 0.5s; /* Время эффекта */
  }
  :hover:after {
    content: '';
    width: 100%;
    display: block;
    position: absolute;
    left: 0;
    bottom: -1px;
    height: 1px; /* Высота линии */
    background-color: ${theme.colors
      .brown3}; /* Цвет подчеркивания при появлении линии*/
    transition: width 0.5s; /* Время эффекта */
  }
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
    transform: ${theme.scale[0]};
  }
  &.active {
    transform: ${theme.scale[0]};
    border-bottom: solid 1px ${theme.colors.brown4};
  }
  &.changeStyle {
    width: 100%;
    margin: 0;
    display: block;
    padding: 8px 10px;
    border: solid 1px ${theme.colors.brown4};
    border-radius: 9px;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.extra};
    font-style: normal;
    font-family: ${theme.fonts[0]};
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
    background-color: ${theme.colors.brown4};
  }
  &.not-changeStyle {
    width: 100%;
    margin: 0;
    display: block;
    padding: 8px 10px;
    border: solid 1px ${theme.colors.brown4};
    border-radius: 9px;
    color: ${theme.colors.brown2};
    font-size: ${theme.fontSizes.extra};
    font-style: normal;
    font-family: ${theme.fonts[0]};
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0;
    background-color: ${theme.colors.fon};
  }
`;
const NavSubContainerUp = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  transform: translateY(-30px);
`;
const NavSubContainerDown = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  transform: translate(-30px, 30px);
`;

const IconArrow = styled(arrowDown)`
  position: absolute;
  left: 135px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const MobileNavBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const NavItemBoxModal = styled.div`
  display: flex;
  position: relative;
  margin-top: 40px;
  
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    margin-top: 60px;
  }
`;

export {
  MobileNavList,
  NavList,
  NavItem,
  NavSubContainerUp,
  NavSubContainerDown,
  IconArrow,
  MobileNavBox,
  NavItemBoxModal,
};
