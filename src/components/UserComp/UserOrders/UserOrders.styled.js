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
  /* position: relative; */

  width: 100%;
  padding: 12px;

  background-color: transparent;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    /* font-size: ${theme.fontSizes.small}; */
    gap: 36px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    /* font-size: ${theme.fontSizes.medium}; */
    gap: 42px;
  }

  /* &::before {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown4};
  } */
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
    background: ${theme.colors.brown4};
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

  color: ${theme.colors.brown2};
  font-size: 12;
  font-style: normal;
  margin-top: 0;
  font-family: ${theme.fonts[0]};
  font-weight: 400;
  letter-spacing: 0;

  width: ${props => (props.$width ? '100%' : 'auto')};

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 16px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 20px;
  }
`;

const ImgItem = styled.img`
  width: 80px;
  height: 115px;
  object-fit: contain;
  border-radius: 12px;
`;

const PaymentBox = styled.div`
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 35%;
  }

  & > div {
    /* padding: 0; */

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
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    flex-direction: row;
    padding: 0 10px 10px;
  }

  & p {
    color: ${theme.colors.brown4};
    font-family: ${theme.fonts[0]};
    font-size: 12px;
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
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: ${theme.colors.brown4};
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

const ShopBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShopBoxTitle = styled.h2`
  color: ${theme.colors.brown2};
  font-size: 16px;
  font-style: normal;
  font-family: ${theme.fonts[0]};
  font-weight: 600;
  margin-bottom: 15px;
  
  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: 24px;
    margin-bottom: 35px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: 36px;
    margin-bottom: 45px;
  }
`;

export {
  ShopBox,
  ShopBoxTitle,
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
