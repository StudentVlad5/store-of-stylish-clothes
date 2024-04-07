import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ReactComponent as IconFavorite } from 'images/svg/icon_favorite__header.svg';

const IconFav = styled(IconFavorite)`
  display: block;
  size: 30px;

  transition: ${theme.transition[0]};
  cursor: pointer;

  & > path {
    stroke: ${theme.colors.brown1};
  }

  &:hover,
  &:focus {
    transform: ${theme.scale[0]};
    transition: ${theme.transition[0]};
  }
`;

const Grid = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    justify-content: space-evenly;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* justify-content: flex-end; */
  }
`;

const Card = styled.li`
  position: relative;
  padding: 5px;
  width: 165px;

  transition: box-shadow 0.3s;

  &:hover,
  &:focus {
    /* transform: scale(1.05); */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  }

  & a {
    text-decoration: none;
    cursor: pointer;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 285px;
  }
`;

const CardImage = styled(LazyLoadImage)`
  width: 150px;
  height: 200px;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 265px;
    height: 280px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 285px;
    height: 380px;
  }
`;

const CardDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;

  max-width: 175px;
  padding: 5px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    max-width: 285px;
  }
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 5px;

  width: 100%;
`;

const CardName = styled.span`
  color: ${theme.colors.brown2};
  font-size: ${theme.fontSizes.extra};
  font-style: normal;
  margin-top: 0;
  text-align: left;
  font-family: ${theme.fonts[0]};
  font-weight: 600;
  line-height: normal;
  margin-bottom: 0;
  letter-spacing: 0;
  text-transform: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const CardPrices = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

const CardDiscount = styled.span`
  font-size: ${theme.fontSizes.medium};
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0;
  text-transform: none;

  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.large};
  }
`;

const CardPrice = styled(CardDiscount)`
  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  text-decoration-line: line-through;

  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

const CardInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: ${theme.fontSizes.medium};
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    color: ${theme.colors.brown2};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: ${theme.fontSizes.large};
    }
  }

  & div {
    display: flex;
    gap: 3px;
  }
`;

const BtnForFavorite = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;
  background: transparent;
`;
const CardStatus = styled.p`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  font-family: ${theme.fonts[1]};
  font-size: 20px;
  color: ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }

  &:first-of-type {
    position: absolute;
    width: auto;
    top: -10px;
    right: -10px;
    padding: 10px 13px;
    text-transform: lowercase;
    font-family: ${theme.fonts[0]};
    color: ${theme.colors.white};
    border-radius: 16px;
    background-color: ${theme.colors.brown4};
    z-index: 10;
  }
  &:last-of-type {
    justify-content: space-between;
  }
`;

export {
  Grid,
  Card,
  CardImage,
  CardDescription,
  CardTitle,
  CardName,
  CardPrices,
  CardDiscount,
  CardPrice,
  CardInfo,
  BtnForFavorite,
  IconFav,
  CardStatus,
};
