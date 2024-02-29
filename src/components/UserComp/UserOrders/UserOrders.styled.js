import theme from 'components/baseStyles/Variables.styled';
import styled from 'styled-components';
import {
  DiscrDataList,
  DiscrDataListItem,
  DiscrDataListItemHeading,
  DiscrDataListItemPrice,
  DiscrDataListItemTitle,
  DiscrDataListItemTitlePrice,
  DiscrDataTable,
  DiscrDataTableData,
  DiscrDataTableHead,
  DiscrDataTableLine,
} from 'components/Basket/BasketList/BasketList.styled';
import { ReactComponent as arrowDown } from 'images/svg/arrowDown.svg';

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    margin-top: 20px;
  }
`;

const OrderItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 24px;

  width: 100%;
  padding: 12px;

  color: ${theme.colors.brown1};
  font-family: ${theme.fonts[1]};
  font-size: ${theme.fontSizes.extrasmall};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.32px;

  background-color: ${theme.colors.green6};
  border-radius: 10px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.small};
    gap: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.medium};
    gap: 42px;
  }
`;

const OrderItemHeadlineList = styled.ul`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 6px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 10px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown2};
  }
`;

const ArrowDown = styled(arrowDown)`
  position: absolute;
  bottom: 5px;
  right: 10px;

  width: 14px;
  height: 14px;

  cursor: pointer;

  @media screen and (min-width: 1024px) {
    top: 5px;
    bottom: 0;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    right: 10px;
  }
`;

const OrderItemList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }
`;

const OrderListDetails = styled.ul`
  display: flex;
  flex-direction: ${props => (props.$row ? 'row' : 'column')};
  flex-wrap: wrap;
  justify-content: start;
  align-items: flex-start;
  gap: 12px;
  width: ${props => (props.$halfWidth ? '100%' : '100%')};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: ${props => (props.$halfWidth ? '50%' : '100%')};
  }
`;

const OrderItemDetails = styled.li`
  display: flex;
  gap: 10px;

  width: ${props => (props.$width ? '100%' : 'auto')};
`;

const ImgItem = styled.img`
  width: 80px;
  height: 115px;
  object-fit: contain;
`;

const PaymentBox = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 35%;
  }

  & > div {
    padding: 0;

    & h4 {
      margin-bottom: 5px;
    }

    & tbody {
      gap: 4px;
    }
  }
`;

const DeliveryPayBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-flow: wrap;
  justify-content: space-between;
  gap: 12px;

  width: 100%;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 10px 10px;
  }

  & p {
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
`;

const DeliveryBox = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 60%;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const PayBox = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 35%;
  }
`;

export {
  ListContainer,
  OrderItem,
  OrderItemList,
  OrderItemHeadlineList,
  OrderListDetails,
  OrderItemDetails,
  ImgItem,
  ArrowDown,
  PaymentBox,
  DeliveryPayBox,
  DeliveryBox,
  PayBox,
};
