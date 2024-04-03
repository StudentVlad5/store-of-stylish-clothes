import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOrder } from 'services/APIservice';
import { selectId } from 'redux/auth/selectors';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/pagination';

import {
  ArrowDown,
  ImgItem,
  ListContainer,
  OrderItem,
  OrderItemList,
  OrderItemDetails,
  OrderItemHeadlineList,
  OrderListDetails,
  PaymentBox,
  DeliveryPayBox,
  DeliveryBox,
  PayBox,
  ShopBox,
  ShopBoxTitle,
} from './UserOrders.styled';
import {
  DiscrDataList,
  DiscrDataListItem,
  DiscrDataListItemHeading,
  DiscrDataListItemPrice,
  DiscrDataListItemTitle,
  DiscrDataTable,
  DiscrDataTableData,
  DiscrDataTableHead,
  DiscrDataTableLine,
} from 'components/Basket/BasketList/BasketList.styled';
import {
  PaymentTotal,
  PaymentTotalList,
  PaymentTotalListItem,
  PaymentTotalListItemDiscr,
  PaymentTotalListItemTitle,
  PaymentTotalTitle,
  PaymentTotalTitleH4,
  PaymentTotalTitlePrice,
  PaymentTotalTitlePriceDiscr,
} from 'components/Basket/Total/TotalPrice.styled';
import { BtnBrown, BtnLight } from '../UserData/UserData.styled';
import { useTranslation } from 'react-i18next';

export const UserOrders = () => {
  const { t } = useTranslation();
  const [orderList, setOrderList] = useState([]);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isShowDetails, setIsShowDetails] = useState(false);
  const user_id = useSelector(selectId);
  const [searchParams, setSearchParams] = useSearchParams();
  let perPage = 5;

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page: 1, perPage };
      setPages(1);
      setSearchParams(params);
    }
    (async function getOrders() {
      setIsLoading(true);
      try {
        const { data } = await getOrder(`/order/${user_id}?${searchParams}`);
        let array = [];
        data?.data.map(it => array.push(it.createdAt));
        array.sort(function (a, b) {
          var c = new Date(a);
          var d = new Date(b);
          return d - c;
        });
        let newData = [];
        array.forEach(it =>
          data?.data.map(item => {
            if (item.createdAt === it) {
              newData.push(item);
            }
          }),
        );
        setOrderList(newData);
        setTotalPage(Math.ceil(data.total / perPage));
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page, perPage, searchParams]);

  useEffect(() => {
    if (page === 1) {
      setSearchParams({ page: 1, perPage });
    }
  }, []);

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setPages(toPage);
    setSearchParams(searchParams);
  };

  const toggleVisibility = idx => {
    setIsShowDetails(prevState => ({
      ...prevState,
      [idx]: !prevState[idx],
    }));
  };

  return (
    <ListContainer>
      {orderList ? (
        orderList.map((order, idx) => (
          <OrderItem key={order._id}>
            <OrderItemHeadlineList>
              <OrderItemDetails>
                <span>{t('Order ID')}:</span> <span>{order._id}</span>
              </OrderItemDetails>
              <OrderItemDetails>
                <span>{t('Order Date')}:</span>
                <span>
                  {order?.createdAt
                    .split('T')[0]
                    .split('-')
                    .reverse()
                    .join('.')}
                </span>
              </OrderItemDetails>
              <OrderItemDetails>
                <span>{t('Total')}: </span>
                <span>
                  {order?.totalPayment}
                  {order?.basket[0]?.currency}
                </span>
              </OrderItemDetails>
            </OrderItemHeadlineList>
            <OrderItemList>
              <OrderListDetails $halfWidth>
                {order?.basket?.optionData.map(item => (
                  <OrderItemDetails $width key={item.article}>
                    <ImgItem
                      src={item?.mainImage}
                      alt="Product image"
                      loading="lazy"
                    />
                    <DiscrDataList style={{ width: 'calc(100% - 100px)' }}>
                      <DiscrDataListItem>
                        <DiscrDataListItemHeading>
                          <DiscrDataListItemTitle>
                            {item?.title}
                          </DiscrDataListItemTitle>
                        </DiscrDataListItemHeading>
                      </DiscrDataListItem>
                      <table>
                        <DiscrDataTable style={{ gap: '5px' }}>
                          <DiscrDataTableLine>
                            <DiscrDataTableHead>{t('Size')}</DiscrDataTableHead>
                            <DiscrDataTableData>
                              {item?.options}
                            </DiscrDataTableData>
                          </DiscrDataTableLine>

                          <DiscrDataTableLine>
                            <DiscrDataTableHead>
                              {t('Price')}
                            </DiscrDataTableHead>
                            {/* {item?.discount !== 0 ? ( */}
                            <DiscrDataTableData>
                              <DiscrDataListItemPrice $red>
                                {item?.newPrice}
                                {item?.currency}
                              </DiscrDataListItemPrice>
                              <DiscrDataListItemPrice>
                                {item?.oldPrice}
                                {item?.currency}
                              </DiscrDataListItemPrice>
                            </DiscrDataTableData>
                            {/* // ) : (
                              //   <DiscrDataTableData>
                              //     <DiscrDataListItemPrice $current>
                              //       {item?.newPrice}
                              //       {item?.currency}
                              //     </DiscrDataListItemPrice>
                              //   </DiscrDataTableData>
                              // )} */}
                          </DiscrDataTableLine>
                          <DiscrDataTableLine>
                            <DiscrDataTableHead>
                              {t('Quantity')}
                            </DiscrDataTableHead>
                            <DiscrDataTableData style={{ marginLeft: 10 }}>
                              <span>{item?.quantity}</span>
                            </DiscrDataTableData>
                          </DiscrDataTableLine>
                        </DiscrDataTable>
                      </table>
                    </DiscrDataList>
                  </OrderItemDetails>
                ))}
              </OrderListDetails>
              <PaymentBox>
                <PaymentTotal>
                  <PaymentTotalTitleH4>{t('Total')}</PaymentTotalTitleH4>
                  <table>
                    <PaymentTotalList>
                      <PaymentTotalListItem>
                        <PaymentTotalListItemTitle>
                          {t('Amount for the product')}
                        </PaymentTotalListItemTitle>
                        <PaymentTotalListItemDiscr>
                          {order?.currency}
                          {order?.totalAmount}
                        </PaymentTotalListItemDiscr>
                      </PaymentTotalListItem>

                      <PaymentTotalListItem>
                        <PaymentTotalListItemTitle>
                          Discount amount
                        </PaymentTotalListItemTitle>
                        <PaymentTotalListItemDiscr>
                          {order?.currency}
                          {
                            +(order?.totalAmount - order?.totalPayment).toFixed(
                              2,
                            )
                          }
                        </PaymentTotalListItemDiscr>
                      </PaymentTotalListItem>
                      {/* 
                      <PaymentTotalListItem>
                        <PaymentTotalListItemTitle>
                          {t("Delivery")}
                        </PaymentTotalListItemTitle>
                        {order?.totalAmount < 150 ? (
                          <PaymentTotalListItemDiscr>
                            {order?.currency}
                            {150 - order?.totalAmount}
                          </PaymentTotalListItemDiscr>
                        ) : (
                          <PaymentTotalListItemDiscr>
                            Free
                          </PaymentTotalListItemDiscr>
                        )}
                      </PaymentTotalListItem> */}

                      <PaymentTotalListItem>
                        <PaymentTotalTitle>{t('Payment')}</PaymentTotalTitle>
                        <PaymentTotalTitle>
                          {order?.currency}
                          {order?.totalPayment}
                        </PaymentTotalTitle>
                      </PaymentTotalListItem>
                    </PaymentTotalList>
                  </table>
                </PaymentTotal>
              </PaymentBox>
            </OrderItemList>
            <DeliveryPayBox>
              <DeliveryBox>
                <PaymentTotalTitleH4>{t('Delivery')}</PaymentTotalTitleH4>
                <div>
                  <p>{order?.deliveryOrder?.delivery}</p>
                  <p> {order?.deliveryOrder?.cityDelivery}</p>
                  <p>{order?.deliveryOrder?.departmentDelivery}</p>
                </div>
              </DeliveryBox>
              <PayBox>
                <PaymentTotalTitleH4>{t('Payment')}</PaymentTotalTitleH4>
                <p>{order?.selectedPaymentOption}</p>
              </PayBox>
            </DeliveryPayBox>
          </OrderItem>
        ))
      ) : (
        <ShopBox>
          <ShopBoxTitle>{"You don't have orders"}</ShopBoxTitle>
          <BtnBrown>{t('Shop')}</BtnBrown>
        </ShopBox>
      )}
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Pagination totalPage={totalPage} changePage={setPage} page={page} />
    </ListContainer>
  );
};
