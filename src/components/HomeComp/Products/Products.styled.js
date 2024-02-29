import styled from 'styled-components';
import { Container, Headline } from 'components/baseStyles/CommonStyle.styled';
import theme from 'components/baseStyles/Variables.styled';
import { Link, NavLink } from 'react-router-dom';
import { ReactComponent as arrow } from 'images/svg/arrow.svg';

export const ProductsBox = styled(Container)`
  padding-bottom: 0;
  /* overflow-x: hidden; */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding-bottom: 0;
  }
`;

export const ProductsSection = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 60px 0;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;

    height: 1px;
    width: 100%;
    background: ${theme.colors.brown1};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 120px 0;
  }
`;

export const ProductsTitle = styled(Headline)``;

export const ProductsBtn = styled(Link)`
  display: flex;
  justify-content: flex-end;
  color: ${theme.colors.green};
  font-family: ${theme.fonts[1]};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  text-decoration-line: underline;

  &:hover,
  &:focus {
    color: ${theme.colors.green1};
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

export const ProductsList = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 24px;

  overflow-x: hidden;

  /* display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentIndex * 250}px); */
`;

export const ProductsListItem = styled.li`
  display: flex;
  align-items: center;
  flex: 0 0 285px;
  height: 496px;
  padding: 5px;
  cursor: pointer;
  list-style: none;

  &:hover,
  &:focus {
    /* transform: scale(1.05); */
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1); /* Додайте потрібні значення для тіні */
  }
`;

export const ProductsListItemLink = styled(NavLink)`
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s;
`;

export const ProductsImg = styled.img`
  width: 275px;
  height: 400px;
  margin-bottom: 21px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-bottom: 25px;
  }
`;

export const ListItemDiscrTitle = styled.span`
  color: ${theme.colors.green};
  text-align: center;
  font-family: ${theme.fonts[1]};
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const ProductsArrowIconBox = styled.div`
  position: relative;
  top: -262px;
`;

export const ProductsArrowIcon = styled(arrow)`
  cursor: pointer;
  stroke: black;
  &:nth-child(1) {
    transform: scaleX(-1);
  }

  &:nth-child(2) {
    position: absolute;
    right: 0;
  }
`;

export const ItemWraper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  width: 285px;
  height: 520px;
`;

export const NameWraper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
`;
