import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from 'components/baseStyles/Variables.styled';
import {
  Card,
  CardDiscount,
  CardImage,
  CardName,
  CardPrice,
  CardPrices,
  CardInfo,
  CardTitle,
} from 'components/Catalog/CatalogList/CatalogList.styled';

import { ReactComponent as iconClose } from 'images/svg/icon_close.svg';

const SearchResult = styled.div`
  position: absolute;
  top: 40px;
  right: 0;
  z-index: 40;

  width: 100%;
  height: calc(100vh - 44px);

  background-color: ${theme.colors.white};
  border: 0.5px solid ${theme.colors.greyOpacity};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    top: 60px;
    width: 1000px;
    height: 500px;

    background-color: ${theme.colors.fon};
    border: 0.5px solid ${theme.colors.brown2};
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
`;

const InnerLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;

  width: 55%;
  padding: 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 65%;
  }
`;

const InnerRightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;

  width: 45%;
  padding: 30px;

  background-color: ${theme.colors.greyOpacity};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 35%;
  }
`;

const Products = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 40px;

  width: 100%;
  margin-bottom: auto;
`;

const LinkToGifts = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 16px;

  margin-left: auto;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  text-align: center;

  color: ${theme.colors.green};

  &:hover,
  &:focus {
    color: ${theme.colors.brown};
  }

  & span {
    position: relative;
    padding-left: 24px;

    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: 0;

      width: 18px;
      height: 18px;

      background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg id='gift_alt_light'%3E%3Crect id='Rectangle 4212' x='3.50098' y='9.5' width='17' height='3' rx='1.5' stroke='%233F3222' stroke-linecap='round'/%3E%3Cpath id='Vector 401' d='M5.50098 12.5V18.3C5.50098 19.4201 5.50098 19.9802 5.71896 20.408C5.91071 20.7843 6.21667 21.0903 6.593 21.282C7.02082 21.5 7.58087 21.5 8.70098 21.5H15.301C16.4211 21.5 16.9811 21.5 17.409 21.282C17.7853 21.0903 18.0912 20.7843 18.283 20.408C18.501 19.9802 18.501 19.4201 18.501 18.3V12.5' stroke='%233F3222' stroke-linecap='round'/%3E%3Cpath id='Vector 402' d='M12.501 6.5V9.5H9.50098C7.84412 9.5 6.50098 8.15685 6.50098 6.5C6.50098 4.84315 7.84412 3.5 9.50098 3.5C11.1578 3.5 12.501 4.84315 12.501 6.5Z' stroke='%233F3222' stroke-linecap='round'/%3E%3Cpath id='Vector 403' d='M12.501 7.5V9.5H14.501C15.6055 9.5 16.501 8.60457 16.501 7.5C16.501 6.39543 15.6055 5.5 14.501 5.5C13.3964 5.5 12.501 6.39543 12.501 7.5Z' stroke='%233F3222' stroke-linecap='round'/%3E%3Cpath id='Vector 404' d='M12.501 9.5V21.5' stroke='%233F3222' stroke-linecap='round'/%3E%3C/g%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-size: contain;
    }
  }
`;

const LinkToCatalog = styled(NavLink)`
  width: 100px;
  height: 30px;
  margin: 0 auto;
  padding: 7px 0;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration: none;
  text-align: center;

  color: ${theme.colors.fon};

  background-color: ${theme.colors.green};

  border: 0.5px solid ${theme.colors.green};
  border-radius: 10px;

  &:hover,
  &:focus {
    background-color: ${theme.colors.green2};
    border: 0.5px solid ${theme.colors.green2};
  }
`;

const CardSearch = styled(Card)`
  width: 274px;

  & > a {
    display: flex;
    align-items: center;
  }
`;

const CardImageSearch = styled(CardImage)`
  width: 62px;
  height: 100px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 93px;
    height: 150px;
  }
`;

const CardNameSearch = styled(CardName)`
  font-size: 12px;
`;

const CardPricesSearch = styled(CardPrices)`
  gap: 4px;
`;

const CardDiscountSearch = styled(CardDiscount)`
  font-size: 12px;
`;

const CardPriceSearch = styled(CardPrice)`
  font-size: 10px;
`;

const CardSizeSearch = styled(CardInfo)`
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;

  & span {
    font-size: 8px;
  }
`;

const CardTitleSearch = styled(CardTitle)`
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  width: 130px;
`;

const Category = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: 100%;
  margin-bottom: auto;

  & a {
    font-size: 12px;
    text-decoration: none;
    text-transform: capitalize;
    color: ${theme.colors.green};

    &:first-of-type {
      opacity: 0.4;
    }

    &:hover,
    &:focus {
      color: ${theme.colors.brown1};
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 16px;
    }
  }
`;

const ButtonClose = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 10;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  width: 24px;
  height: 24px;

  background-color: transparent;
  border: none;

  cursor: pointer;

  &:hover,
  &:focus {
    outline: none;
    border: none;
  }
`;

const IconClose = styled(iconClose)`
  size: 24px;
  display: block;
  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};

    &:hover,
    &:focus {
      stroke: ${theme.colors.brown};
      fill: ${theme.colors.brown};
    }
  }
`;

export {
  SearchResult,
  Wrapper,
  InnerLeftWrapper,
  InnerRightWrapper,
  Products,
  LinkToCatalog,
  LinkToGifts,
  Category,
  CardSearch,
  CardDiscountSearch,
  CardImageSearch,
  CardNameSearch,
  CardPriceSearch,
  CardPricesSearch,
  CardSizeSearch,
  CardTitleSearch,
  ButtonClose,
  IconClose,
};
