import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import { ReactComponent as iconBookmark } from 'images/svg/bookmark.svg';
import { ReactComponent as iconBasket } from 'images/svg/basket.svg';

export const CardContainer = styled.ul`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 340px;
  height: 513px;
  border-radius: 16px;
  border: 1px solid ${theme.colors.brown4};
  padding: 22px 19px 19px 22px;
  gap: 34px;
`;
export const CardLi = styled.li`
  display: flex;
  justify-content: start;
  align-items: start;
  width: 100%;
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.extra};
  color: ${theme.colors.brown2};
  &:first-of-type {
    position: absolute;
    width: auto;
    top: -10px;
    right: -10px;
    padding: 10px 22px;
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
export const IconBookmark = styled(iconBookmark)`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  cursor: pointer;
`;
export const IconBasket = styled(iconBasket)`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const ImgItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  position: relative;
  width: 294px;
  height: 349px;
  background-image: ${props => props.props};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 16px;
`;
