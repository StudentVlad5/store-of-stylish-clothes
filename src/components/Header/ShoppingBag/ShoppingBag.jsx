import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getItemInBasket, updateItemInBasket } from 'services/APIservice';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import { addToBasket } from 'redux/basket/operations';
import { ShoppingBagList } from './ShoppingBagList/ShoppingBagList';
import {
  BasketIconClose,
  BasketBox,
  BasketBoxTitle,
  BasketTitle,
  BasketBoxList,
  BasketBoxListTitle,
  BasketBoxListDiscr,
  List,
  ListItem,
  ListImage,
  ListTitle,
  ListTitleBox,
  Overlay,
  Box,
  OrderBtn,
  TotalDiscr,
  TotalTitle,
  TotalTitleBox,
  OrderBox,
  OrderList,
  TotalTitlePrice,
  ProgressBarBox,
  ProgressBarTitle,
  ProgressBar,
} from './ShoppingBag.styled';
import {
  Count,
  IconBasket,
  IconWrapper,
} from 'components/Header/Navigation/Navigation.styled';

import groupPlants from 'images/basket/group-plants.png';
import peaceLily from 'images/basket/peace-lily.png';
import philodendron from 'images/basket/philodendron.png';
import plantGrayPot from 'images/basket/plant-gray-pot.png';
import { reloadValue } from 'redux/reload/selectors';
import { addReload } from 'redux/reload/slice';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

export const ShoppingBag = () => {
  const [isOpen, setIsOpen] = useState(false);
  // ---------------------------------------------
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [datas, setDatas] = useState([]);
  const [userAnonimusID] = useState(
    getFromStorage('userAnonimusID') ? getFromStorage('userAnonimusID') : '',
  );
  const { contextBasket, setContextBasket } = useContext(StatusContext);
  const dispatch = useDispatch();
  const reload = useSelector(reloadValue);

  useEffect(() => {
    (async function getItem() {
      setIsLoading(true);
      try {
        const { data } = await getItemInBasket(`/basket/${userAnonimusID}`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setDatas(prev => data);
        setContextBasket(prev => data);
        dispatch(addToBasket(data));
        saveToStorage('basketData', data);
      } catch (error) {
        setError(error);
      } finally {
        dispatch(addReload(false));
        setIsLoading(false);
      }
    })();
  }, [reload]);

  useEffect(() => {
    async function getItem() {
      setIsLoading(true);
      try {
        const { data } = await getItemInBasket(`/basket/${userAnonimusID}`);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setDatas(prev => data);
        setContextBasket(prev => data);
        dispatch(addToBasket(data));
        saveToStorage('basketData', data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (isOpen) {
      getItem();
    }
  }, [isOpen]);

  async function updateItem(items) {
    if (items !== undefined) {
      setIsLoading(true);
      const perem = { optionData: [...items] };
      try {
        const { data } = await updateItemInBasket(
          `/basket/${userAnonimusID}`,
          perem,
        );
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        const optionData = data[0].optionData;
        const _id = data[0]._id;
        setDatas(prev => [{ optionData, _id }]);
        setContextBasket(prev => [{ optionData, _id }]);
        dispatch(addToBasket([{ optionData, _id }]));
        saveToStorage('basketData', [{ optionData, _id }]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  // ____________________________________________

  const dataArr = [
    {
      imageUrl: plantGrayPot,
      title: 'Pet - friendly plants',
      link: '/shop?perPage=12&page=1&petFriendly=pet+friendly',
    },
    {
      imageUrl: peaceLily,
      title: 'Rare plants',
      link: '/shop?perPage=12&page=1&rare=rare',
    },
    {
      imageUrl: philodendron,
      title: 'Hard to kill plants',
      link: '/shop?perPage=12&page=1&hardToKill=easy+to+care',
    },
    {
      imageUrl: groupPlants,
      title: 'Gifts',
      link: '/gifts',
    },
  ];

  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    let total = 0;
    if (datas) {
      datas[0]?.optionData?.map(
        product => (total += product.quantity * product.currentPrice),
      );
    }
    setTotalPayment(total);
  }, [datas]);

  let currency = '';
  if (datas) {
    currency = datas[0]?.optionData[0]?.currency;
  }

  const handlecheckout = () => {
    updateItem(datas[0]?.optionData);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <IconWrapper>
        <IconBasket onClick={() => setIsOpen(!isOpen)} aria-label="Basket" />
        {datas &&
          datas[0]?.optionData?.length !== 0 &&
          datas[0]?.optionData?.length !== undefined && (
            <Count onClick={() => handlecheckout()}>
              {datas[0].optionData?.length}
            </Count>
          )}
      </IconWrapper>

      <Overlay isOpen={isOpen} onClick={() => handlecheckout()} />

      <BasketBox open={isOpen}>
        <BasketBoxTitle>
          <BasketTitle>Your card</BasketTitle>
          <BasketIconClose onClick={() => handlecheckout()} />
        </BasketBoxTitle>

        <BasketBoxList>
          {datas &&
          datas[0]?.optionData?.length !== 0 &&
          datas[0]?.optionData?.length !== undefined ? (
            <OrderBox>
              <div>
                {totalPayment < 150 ? (
                  <>
                    <ProgressBarTitle>
                      You’re ${(150 - totalPayment).toFixed(2)} away from Free
                      Shipping!
                    </ProgressBarTitle>
                    <ProgressBarBox>
                      <ProgressBar
                        style={{
                          width: `${(totalPayment / 150) * 100}%`,
                        }}
                      ></ProgressBar>
                    </ProgressBarBox>
                  </>
                ) : (
                  <ProgressBarTitle>
                    Great! You have free shipping!
                  </ProgressBarTitle>
                )}

                <OrderList>
                  {datas[0]?.optionData?.map((product, idx) => (
                    <ShoppingBagList
                      key={`${idx}${product._id}`}
                      optionData={product}
                      setDatas={setDatas}
                      datas={datas}
                      idx={idx}
                    />
                  ))}
                </OrderList>
              </div>
              <TotalTitleBox>
                <div>
                  <TotalTitle>Total</TotalTitle>
                  <TotalTitlePrice>
                    {currency}
                    {totalPayment}
                  </TotalTitlePrice>
                </div>

                <TotalDiscr>
                  Separate shipping is applicable to the majority of items. Once
                  an order is placed, it cannot be cancelled.
                </TotalDiscr>

                <OrderBtn to="/basket" onClick={() => handlecheckout()}>
                  checkout
                </OrderBtn>
              </TotalTitleBox>
            </OrderBox>
          ) : (
            <Box>
              <BasketBoxListTitle>Oh! your card is empty</BasketBoxListTitle>
              <BasketBoxListDiscr>
                We recommend checking out:
              </BasketBoxListDiscr>
              <List>
                {dataArr.map((item, idx) => (
                  <ListItem key={idx} onClick={() => setIsOpen(false)}>
                    <NavLink to={item.link}>
                      <ListImage
                        src={item.imageUrl}
                        width={120}
                        height={130}
                        alt="Image"
                        loading="lazy"
                      />
                      <ListTitleBox>
                        <ListTitle>{item.title}</ListTitle>
                      </ListTitleBox>
                    </NavLink>
                  </ListItem>
                ))}
              </List>
            </Box>
          )}
        </BasketBoxList>
      </BasketBox>
    </>
  );
};
