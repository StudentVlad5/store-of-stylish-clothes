import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getOrder } from 'services/APIservice';
import { selectId } from 'redux/auth/selectors';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { Pagination } from 'utils/pagination';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';
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
  PaymentTotalTitlePrice,
  PaymentTotalTitlePriceDiscr,
} from 'components/Basket/Total/TotalPrice.styled';

export const UserOrders = () => {
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
      {orderList &&
        orderList.map((order, idx) => (
          <OrderItem key={order._id}>
            <OrderItemHeadlineList>
              <OrderItemDetails>
                <span>Order Number:</span> <span>{order._id}</span>
              </OrderItemDetails>
              <OrderItemDetails>
                <span>Order Date:</span>
                <span>
                  {order?.createdAt
                    .split('T')[0]
                    .split('-')
                    .reverse()
                    .join('.')}
                </span>
              </OrderItemDetails>
              <OrderItemDetails>
                <span>Total: </span>
                <span>
                  {order?.totalPayment}
                  {order?.basket[0]?.currency}
                </span>
              </OrderItemDetails>
              <OrderItemDetails>
                <ArrowDown
                  onClick={() => {
                    toggleVisibility(idx);
                  }}
                />
              </OrderItemDetails>
            </OrderItemHeadlineList>
            {!isShowDetails[idx] && (
              <OrderListDetails $row>
                {order?.basket?.optionData.map(item => (
                  <OrderItemDetails key={item?._id}>
                    <ImgItem
                      src={BASE_URL_IMG + item?.images[0]}
                      alt="Product image"
                      loading="lazy"
                    />
                  </OrderItemDetails>
                ))}
              </OrderListDetails>
            )}
            {isShowDetails[idx] && (
              <>
                <OrderItemList>
                  <OrderListDetails $halfWidth>
                    {order?.basket?.optionData.map(item => (
                      <OrderItemDetails $width key={item._id}>
                        <ImgItem
                          src={BASE_URL_IMG + item?.images[0]}
                          alt="Product image"
                          loading="lazy"
                        />
                        <DiscrDataList style={{ width: 'calc(100% - 100px)' }}>
                          <DiscrDataListItem>
                            <DiscrDataListItemHeading>
                              <DiscrDataListItemTitle>
                                {item?.name}
                              </DiscrDataListItemTitle>
                            </DiscrDataListItemHeading>
                          </DiscrDataListItem>
                          <table>
                            <DiscrDataTable style={{ gap: '5px' }}>
                              <DiscrDataTableLine>
                                <DiscrDataTableHead>Size</DiscrDataTableHead>
                                {item?.title === null ? (
                                  <DiscrDataTableData>-</DiscrDataTableData>
                                ) : (
                                  <DiscrDataTableData>
                                    {item?.title}
                                  </DiscrDataTableData>
                                )}
                              </DiscrDataTableLine>

                              <DiscrDataTableLine>
                                <DiscrDataTableHead>Price</DiscrDataTableHead>
                                {item?.discount !== 0 ? (
                                  <DiscrDataTableData>
                                    <DiscrDataListItemPrice $red>
                                      {item?.currency}
                                      {item?.currentPrice}
                                    </DiscrDataListItemPrice>
                                    <DiscrDataListItemPrice>
                                      {item?.currency}
                                      {item?.oldPrice}
                                    </DiscrDataListItemPrice>
                                  </DiscrDataTableData>
                                ) : (
                                  <DiscrDataTableData>
                                    <DiscrDataListItemPrice $current>
                                      {item?.currency}
                                      {item?.currentPrice}
                                    </DiscrDataListItemPrice>
                                  </DiscrDataTableData>
                                )}
                              </DiscrDataTableLine>
                              <DiscrDataTableLine>
                                <DiscrDataTableHead>
                                  Quantity
                                </DiscrDataTableHead>
                                <DiscrDataTableData>
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
                      <PaymentTotalTitle>Total</PaymentTotalTitle>
                      <table>
                        <PaymentTotalList>
                          <PaymentTotalListItem>
                            <PaymentTotalListItemTitle>
                              Amount for the product
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
                              {order?.totalDiscount}
                            </PaymentTotalListItemDiscr>
                          </PaymentTotalListItem>

                          <PaymentTotalListItem>
                            <PaymentTotalListItemTitle>
                              Delivery
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
                          </PaymentTotalListItem>

                          <PaymentTotalListItem>
                            <PaymentTotalTitlePrice>
                              Payment
                            </PaymentTotalTitlePrice>
                            <PaymentTotalTitlePriceDiscr>
                              {order?.currency}
                              {order?.totalPayment}
                            </PaymentTotalTitlePriceDiscr>
                          </PaymentTotalListItem>
                        </PaymentTotalList>
                      </table>
                    </PaymentTotal>
                  </PaymentBox>
                </OrderItemList>
                <DeliveryPayBox>
                  <DeliveryBox>
                    <PaymentTotalTitle>Delivery</PaymentTotalTitle>
                    <div>
                      <p>{order?.deliveryOrder?.delivery}</p>
                      <p> {order?.deliveryOrder?.cityDelivery}</p>
                      <p>{order?.deliveryOrder?.departmentDelivery}</p>
                    </div>
                  </DeliveryBox>
                  <PayBox>
                    <PaymentTotalTitle>Payment</PaymentTotalTitle>
                    <p>{order?.selectedPaymentOption}</p>
                  </PayBox>
                </DeliveryPayBox>
              </>
            )}
          </OrderItem>
        ))}
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError('Whoops, something went wrong')}
      <Pagination totalPage={totalPage} changePage={setPage} page={page} />
    </ListContainer>
  );
};
