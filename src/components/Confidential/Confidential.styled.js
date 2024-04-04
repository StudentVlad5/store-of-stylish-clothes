import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { Container, Section } from 'components/baseStyles/CommonStyle.styled';

const CareSection = styled(Section)`
  padding-top: 122px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding-top: 154px;
    flex-direction: row;
  }
`;

const CareContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* flex-direction: row; */
    gap: 40px;
  }
`;

const CareContainerWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 40vh;
  overflow: hidden;

  /* &:first-child {
    height: 30vh;
  } */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 100vh;

    &:first-child {
      height: 100vh;
    }
  }
`;

const ListContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;

  overflow-y: scroll;
  box-sizing: content-box;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const CareUl = styled.ol`
  /* margin-bottom: 20px; */
`;

const CareLi = styled.li`
  margin-bottom: 10px;
`;

const CareSpanTitle = styled.h2`
  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[0]};
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 10px;

  &:first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 24px;
  }
`;

const CareSpanName = styled.p`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* text-transform: uppercase; */

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const CareSpanValue = styled.span`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const CareSpan = styled.span`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  &:first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 20px 20px;
  width: 100%;
`;

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0px;
  width: 100%;
  padding: 8px 0 8px 10px;

  font-family: ${theme.fonts[0]}; //Raisonne Pro
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  background-color: ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    padding: 18px 0 18px 10px;
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  border-top: 1px solid ${theme.colors.beige};

  &:last-of-type {
    border-bottom: 0.5px solid ${theme.colors.beige};
  }
`;

const TitleHeading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.green};
  background-color: ${theme.colors.fon};

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &.active ~ div {
    display: flex;
  }

  & span {
    text-transform: uppercase;
  }
`;
export {
  CareSection,
  CareContainer,
  CareContainerWrapper,
  CareUl,
  CareLi,
  CareSpanTitle,
  List,
  ListItem,
  TitleHeading,
  CareSpan,
  ListContainer,
  CareSpanName,
  CareSpanValue,
};
