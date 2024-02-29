import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';

export const OrderItem = styled.li`
  display: flex;
  gap: 20px;
`;

export const DiscrBoxDiv = styled.div`
  display: flex;
  width: 65%;
`;

export const DiscrBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
  width: 100%;
`;

export const DiscrBoxForText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    justify-content: space-between;
  }
`;

export const DiscrBoxTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
  }
`;

export const DiscrTitle = styled.p`
  color: ${theme.colors.fon};
  font-family: ${theme.fonts[1]};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 16px;
  }
`;

export const DiscrBoxSize = styled.p`
  color: ${theme.colors.fon};
  font-family: ${theme.fonts[0]};
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 12px;
  }
`;

export const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 1px;
  width: 65px;

  border-radius: 10px;
  border: 0.5px solid ${theme.colors.fon};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 19px;
    width: 95px;
  }

  & span {
    font-family: ${theme.fonts[0]};
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
    color: ${theme.colors.fon};

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      font-size: 12px;
    }
  }
`;

export const IconQuantityBtn = styled.button`
  padding: 0;
  line-height: 0;

  background-color: transparent;
  border: none;
  cursor: pointer;

  & > svg {
    width: 15px;
    height: 15px;
    cursor: pointer;

    @media screen and (min-width: ${theme.breakpoints.desktop}) {
      width: 20px;
      height: 20px;
    }

    & > path {
      stroke: ${theme.colors.fon};
      fill: ${theme.colors.fon};
    }
  }

  &:disabled {
    cursor: default;

    & > svg > path {
      stroke: ${theme.colors.brown2};
      fill: ${theme.colors.brown2};
    }
  }
`;

export const RemoveBtn = styled.button`
  font-family: ${theme.fonts[0]};
  font-size: 8px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 16.8px */
  text-transform: uppercase;

  color: ${theme.colors.fon};
  text-align: center;

  background-color: transparent;
  border-color: transparent;
  border: 0;

  cursor: pointer;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 12px;
  }
`;
