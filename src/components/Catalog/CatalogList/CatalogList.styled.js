import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { IconFavorite } from 'components/Header/Navigation/Navigation.styled';

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

const CardImage = styled.img`
  width: 150px;
  /* height: 300px; */
  height: auto;
  margin: 0 auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 285px;
    /* height: 460px; */
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
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const CardPrices = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 8px;
  }
`;

const CardDiscount = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  color: ${theme.colors.green};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

const CardPrice = styled.span`
  font-family: ${theme.fonts[1]}; //Nib Pro
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

const CardSize = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 8px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 16.8px */
    color: ${theme.colors.brown2};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 12px;
    }
  }

  & div {
    display: flex;
    gap: 3px;
  }
`;

const BtnForFavorite = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 30px;
  height: 30px;

  border: none;
  background: transparent;
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
  CardSize,
  BtnForFavorite,
  IconFav,
};
