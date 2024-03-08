import theme from 'components/baseStyles/Variables.styled';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MobileNavList } from '../Nav.styled';

export const MobileNavListModalFirst = styled(MobileNavList)`
  margin: 0;
`;

export const ModalFirstOpen = styled.div`
  position: fixed;
  top: 192px;
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

  &.is-modal-open {
    transform: translateX(0);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export const ModalFirstBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
`;

export const ModalFirstListItem = styled(Link)`
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
