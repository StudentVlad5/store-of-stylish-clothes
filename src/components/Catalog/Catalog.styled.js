import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CatalogSection = styled(Section)`
  padding-top: 122px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
  }
`;

const CatalogContainer = styled(Container)`
  margin: 0 auto;
  width: 100%;
`;

const Heading = styled.div`
  display: inline-flex;
  gap: 20px;
  align-items: baseline;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    align-items: center;
  }

  /* & > div {
    display: inline-flex;
  } */

  & a {
    text-decoration: none;
  }
`;

const SearchResults = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 6px;

  margin-top: 15px;
  margin-left: 30px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.brown};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
    margin-left: 300px;
  }

  & > span {
    color: ${theme.colors.brown2};
  }

  & svg {
    width: 14px;
    height: 14px;
  }
`;

const HeadlineShop = styled.h2`
  font-family: ${theme.fonts[1]}; //Nib pro
  display: inline-block;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  text-transform: capitalize;
  color: ${props =>
    props.$primary ? theme.colors.brown2 : theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 28px;
    line-height: 144%; /* 51.84px */
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 36px;
  }
`;

const HeadingBtnBox = styled.div`
  display: inline-block;
  gap: 8px;
  width: auto;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 18px;
  }
`;

const SortBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 200;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    min-width: 150px;
  }
`;

const Accord = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 50px;

    padding: 10px;
    border-radius: 12px;
    border: 0.5px solid ${theme.colors.brown4};
  }

  & span {
    font-family: ${theme.fonts[0]}; //Raisonne Pro
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    color: ${theme.colors.brown2};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }
  }
`;

const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 24px;
    height: 24px;
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;

const FiltersBox = styled.div`
  display: block;
  position: relative;
  /* display: inline-flex; */
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    display: none;
  }
`;

const FiltersWrapper = styled.div`
  position: absolute;
  top: 25px;
  right: 0;
  z-index: 200;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  width: 38vw;
  min-width: 150px;
  max-width: 200px;
  padding: 8px;

  background-color: ${theme.colors.fon};
  border: 0.5px solid ${theme.colors.brown2};
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 2px 4px 2px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 59px;
    width: 341px;
    max-width: 341px;
    border-radius: 0;
  }
`;

const FiltersContainer = styled.div`
  display: none;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    position: sticky;
    top: 150px;
    display: inline-flex;
    flex-direction: column;
    gap: 36px;
    width: 285px;
  }
`;

const SelectedFilters = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;

  margin-top: 10px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-left: 290px;
  }

  & label {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;

    padding: 6px 6px 6px 10px;

    font-family: ${theme.fonts[1]}; //Nib pro
    font-size: 10px;
    line-height: normal;
    color: ${theme.colors.darkGreen};

    border-radius: 20px;
    background: ${theme.colors.greyOpacity};

    & svg {
      width: 10px;
      height: 10px;
    }
  }
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding-top: 16px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

const GridWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  width: 100%;
  max-width: calc(100% - 20px);

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 60px);
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: calc(100% - 285px);
    padding-left: 20px;
  }
`;
const CatalogTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 30px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 0px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    padding: 0 0px;
  }
`;

export {
  CatalogSection,
  CatalogContainer,
  Heading,
  SearchResults,
  HeadlineShop,
  HeadingBtnBox,
  SelectedFilters,
  SortBox,
  Accord,
  IconBtn,
  GridContainer,
  FiltersContainer,
  FiltersBox,
  FiltersWrapper,
  GridWrapper,
  CatalogTitleWrapper,
};
