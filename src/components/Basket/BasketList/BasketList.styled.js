import styled from 'styled-components';
import theme from 'components/baseStyles/Variables.styled';
import { ReactComponent as IconClose } from 'images/svg/icon_close.svg';

export const BasketCompItem = styled.li`
  display: flex;
  position: relative;
  gap: 20px;
  width: 100%;
  /* height: 100%; */
  padding-top: 25px;

  background-color: transparent;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.brown4};
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -25px;
    left: 0;
    height: 1px;
    width: 100%;
    background-color: ${theme.colors.brown4};
  }
`;

export const BasketCompImg = styled.img`
  width: 124px;
  height: 158px;
  border-radius: 12px;
`;

export const BoxForDiscrData = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 130px);
`;

export const BtnItem = styled.p`
  display: flex;
  align-items: center;
  margin-top: 10px;

  color: ${theme.colors.brown1};
  text-align: center;
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  text-transform: uppercase;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const DiscrDataList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const DiscrDataListItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DiscrDataListItemTitle = styled.h4`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-top: 1px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
    width: 331px;
  }
`;

export const DiscrDataListItemHeading = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const DiscrDataListItemTitlePrice = styled.span`
  color: ${theme.colors.brown2};
  font-family: ${theme.fonts[0]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;
  margin-top: 1px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 18px;
  }
`;

export const DiscrDataListItemPrice = styled.p`
  color: ${props =>
    props.$red ? `${theme.colors.red}` : `${theme.colors.brown4}`};
  font-family: ${theme.fonts[1]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: ${props =>
    props.$red || props.$current ? 'none' : 'line-through'};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 12px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 14px;
  }
`;

export const DiscrDataTable = styled.tbody`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
`;

export const DiscrDataTableLine = styled.tr`
  display: flex;
  justify-content: space-between;
  width: 60%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 50%;
  }
`;

export const DiscrDataTableHead = styled.th`
  width: 50%;

  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[1]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.28px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const DiscrDataTableData = styled.td`
  display: flex;
  gap: 5px;

  width: 50%;

  color: ${theme.colors.brown4};
  font-family: ${theme.fonts[1]};
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    gap: 10px;
    font-size: 14px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const IconBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & svg {
    width: 12px;
    height: 12px;

    @media screen and (min-width: ${theme.breakpoints.tablet}) {
      width: 17px;
      height: 17px;
    }

    & > path {
      stroke: ${theme.colors.brown1};
      fill: ${theme.colors.brown1};
    }
  }

  & span {
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
  }

  &:disabled {
    cursor: not-allowed;

    & > svg > path {
      stroke: ${theme.colors.brown3};
      fill: ${theme.colors.brown3};
    }
  }
`;

export const BasketCompIconClose = styled(IconClose)`
  cursor: pointer;
  width: 12px;
  height: 12px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 16px;
    height: 16px;
  }

  & > path {
    stroke: ${theme.colors.brown1};
    fill: ${theme.colors.brown1};
  }
`;
