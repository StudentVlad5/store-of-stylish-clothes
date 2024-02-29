import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ProfileContainer } from 'components/UserComp/UserData/UserData.styled';
import { IconBtn } from 'components/Catalog/Catalog.styled';
import { ReactComponent as checkMark } from 'images/svg/check-mark.svg';

export const TotalBasket = styled.div`
  width: 100%;

  & section {
    padding-top: 0;
    padding-bottom: 0;

    & > div {
      padding: 40px 0 0 0;
    }

    & h1 {
      display: none;
    }
  }
`;

export const DataContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: 40px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    min-width: 350px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 24px;
    width: calc(60% - 30px);
    max-width: 600px;
  }
`;

export const DataContainerItems = styled(ProfileContainer)`
  justify-content: start;
  width: 100%;
  height: auto;

  background-color: ${theme.colors.green6};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    max-width: calc(50% - 20px);
    min-height: 210px;
  }
`;

export const DataTitle = styled.p`
  width: 100%;
  padding-bottom: 12px;

  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  color: ${theme.colors.brown1};

  border-bottom: 0.5px solid ${theme.colors.brown2};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const InputComments = styled.textarea`
  outline: none;
  border: none;
  background: transparent;
`;

export const DataContainerTextBox = styled.div`
  display: flex;
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  align-items: ${props => (props.$row ? 'center' : 'flex-start')};
  gap: 6px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 12px;
  }
`;

export const DataContainerText = styled.p`
  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }

  &:first-child {
    margin-bottom: 2px;
    font-family: ${theme.fonts[1]};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      font-size: 15px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 14px;
    }
    color: ${theme.colors.green};
  }
`;

export const DataContainerPensil = styled(IconBtn)`
  position: absolute;
  top: 20px;
  right: 20px;

  & > svg {
    width: 14px;
    height: 14px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 18px;
      height: 18px;
    }

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const DataContainerCheckMark = styled(checkMark)`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    fill: ${theme.colors.white};
    transform: ${theme.transition[1]};
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.green};
      fill: ${theme.colors.green};
    }
  }
`;
