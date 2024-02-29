import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconClose } from 'components/Header/MobileMenu/MobileMenu.styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  display: ${props => (props.isOpen ? 'block' : 'none')};

  width: 100%;
  height: 100vh;

  background-color: ${theme.colors.grey};
  opacity: 0.4;
`;

export const BasketBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;

  display: ${props => (props.open ? 'block' : 'none')};

  width: 100%;
  max-width: 300px;
  height: 100vh;
  padding: 20px;

  background: ${theme.colors.darkGreen};
  z-index: 11;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 437px;
    max-width: 437px;
    max-height: 780px;
    padding: 40px 24px;
  }
`;

export const Box = styled.div`
  position: relative;
  padding-bottom: 145px;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }
`;

export const BasketBoxTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 18px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 52px;
  }
`;

export const BasketTitle = styled.h3`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const BasketBoxList = styled.div`
  height: calc(100% - 40px);
`;

export const BasketBoxListTitle = styled.h2`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const BasketBoxListDiscr = styled.p`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: lowercase;

  margin-top: 16px;
  margin-bottom: 32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
    padding: 0 64px;
  }
`;

export const ListItem = styled.li`
  & a {
    text-decoration: none;
    cursor: pointer;
  }
`;

export const ListImage = styled.img`
  width: 95px;
  height: 105px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 110px;
    height: 125px;
  }
`;

export const ListTitleBox = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px;
  max-width: 110px;
`;

export const ListTitle = styled.span`
  color: ${theme.colors.fon};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const BasketIconClose = styled(IconClose)`
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.fon};
    fill: ${theme.colors.fon};
  }
`;

// Order true

export const OrderBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: calc(100% - 52px);
`;

export const OrderBtn = styled(Link)`
  display: inline-block;
  padding: 12px;
  width: 100%;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;

  border-radius: 10px;
  background-color: ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const OrderList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;

  max-height: calc(100vh - 275px);
  padding-top: 10px;

  overflow-y: auto;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 20px;
    max-height: 425px;
  }
`;

export const TotalTitleBox = styled.div`
  position: relative;
  margin-top: 24px;

  & > div {
    display: flex;
    justify-content: space-between;
    padding-top: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }
`;

export const TotalTitle = styled.p`
  color: ${theme.colors.fon};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const TotalDiscr = styled.p`
  margin-top: 12px;
  margin-bottom: 24px;

  color: ${theme.colors.fon};
  font-family: ${theme.fonts[0]};
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 12px;
  }
`;
export const TotalTitlePrice = styled.p`
  color: ${theme.colors.fon};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const ProgressBarBox = styled.div`
  background-color: #e5fbcc;
  border-radius: 10px;
  margin-bottom: 24px;
`;

export const ProgressBar = styled.div`
  background-color: #58990d;
  border-radius: 10px;
  height: 8px;
`;

export const ProgressBarTitle = styled.p`
  color: ${theme.colors.fon};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  margin-bottom: 12px;
`;
