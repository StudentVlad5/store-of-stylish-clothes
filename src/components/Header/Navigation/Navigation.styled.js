import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as iconSearch } from 'images/svg/icon_searchLight__header.svg';
import { ReactComponent as iconBookmark } from 'images/svg/bookmark.svg';
import { ReactComponent as iconBasket } from 'images/svg/basket.svg';

const IconWrapper = styled.div`
  position: relative;

  width: 24px;
  height: 24px;

  & svg {
    display: flex;
    justify-content: center;
    width: 100%;
    size: 24px;
    transition: ${theme.transition[0]};
    cursor: pointer;

    &:hover,
    &:focus {
      transform: ${theme.scale[0]};
      transition: ${theme.transition[0]};
    }
  }
`;

const Count = styled.p`
  position: absolute;
  right: -5px;
  top: 12px;

  padding: 1px 5px;

  color: ${theme.colors.fon};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;

  border-radius: 100%;
  background-color: ${theme.colors.brown1};

  cursor: pointer;
`;

const View = styled.div`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    /* align-items: center; */
    gap: 24px;
  }
`;

const IconSearch = styled(iconSearch)`
  width: 32px;
  height: 32px;
  cursor: pointer;
  transition: all 0.25s ease-in 0s;
  &:hover,
  &:focus {
    transform: scale(1.15);
    transition: all 0.25s ease-in 0s;
  }
`;
const IconBookmark = styled(iconBookmark)`
  width: 32px;
  height: 32px;
`;
const IconBasket = styled(iconBasket)`
  width: 32px;
  height: 32px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 32px;
  }
`;

const NavBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: flex;
    /* align-items: center; */
    /* gap: 24px; */
  }
`;

const MobileContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 36px;
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    margin-left: 0px;
  }
`;
const MobileNavBlock = styled(NavBlock)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

export {
  Container,
  NavBlock,
  View,
  IconWrapper,
  Count,
  IconSearch,
  IconBookmark,
  IconBasket,
  MobileContainer,
  MobileNavBlock,
};
