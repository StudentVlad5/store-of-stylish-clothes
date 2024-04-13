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
  ListItemLink,
} from './ShoppingBag.styled';
import {
  Count,
  IconBasket,
  IconWrapper,
} from 'components/Header/Navigation/Navigation.styled';
import { homeProductLinks } from 'BASE_CONST/Base-const';
import photoJacetsCategory from 'images/basket/jacket_mobile_2x.webp';
import photoPantsCategory from 'images/basket/pants_mobile_2x.webp';
import photoHoodiesSweatshirtsCategory from 'images/basket/hoodies_mobile_2x.webp';
import photoGifts from 'images/basket/gifts_mobile_2x.png';
import { reloadValue } from 'redux/reload/selectors';
import { addReload } from 'redux/reload/slice';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { useTranslation } from 'react-i18next';

export const ShoppingBag = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);
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
  const init = {
    category: [],
    currency: selectedCurrency,
    man_woman: [],
    maxPrice: '5000',
    minPrice: '0',
    page: 1,
    perPage: 12,
    product: [],
    sizes: [],
  };

  // const dataArr = [
  //   {
  //     imageUrl: photoJacetsCategory,
  //     title: t('Jackets'),
  //     link: `shop?product=${homeProductLinks?.jacets[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`,
  //     nav: saveToStorage('filters', {
  //       ...init,
  //       product: [homeProductLinks?.jacets[selectedLanguage]],
  //     }),
  //   },
  //   {
  //     imageUrl: photoPantsCategory,
  //     title: t('Pants'),
  //     link: `shop?product=${homeProductLinks?.pants[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`,
  //     nav: saveToStorage('filters', {
  //       ...init,
  //       product: [homeProductLinks?.pants[selectedLanguage]],
  //     }),
  //   },
  //   {
  //     imageUrl: photoHoodiesSweatshirtsCategory,
  //     title: t('Hoodies & Sweatshirts'),
  //     link: `shop?product=${homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`,
  //     nav: saveToStorage('filters', {
  //       ...init,
  //       product: [homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage]],
  //     }),
  //   },
  //   {
  //     imageUrl: photoFootwearCategory,
  //     title: t('Gifts'),
  //     link: '/gifts',
  //   },
  // ];

  const [totalPayment, setTotalPayment] = useState(0);

  useEffect(() => {
    let total = 0;
    if (datas) {
      datas[0]?.optionData?.map(
        product => (total += product.quantity * product.newPrice),
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
          <BasketTitle>{t('Cart')}</BasketTitle>
          <BasketIconClose onClick={() => handlecheckout()} />
        </BasketBoxTitle>

        <BasketBoxList>
          {datas &&
          datas[0]?.optionData?.length !== 0 &&
          datas[0]?.optionData?.length !== undefined ? (
            <OrderBox>
              <div style={{ paddingBottom: 25 }}>
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
                <OrderBtn to="/basket" onClick={() => handlecheckout()}>
                  {t('checkout')}
                  <span style={{ marginLeft: 30 }}>
                    {totalPayment}
                    {currency}
                  </span>
                </OrderBtn>
              </TotalTitleBox>
            </OrderBox>
          ) : (
            <Box>
              <BasketBoxListTitle>{t('Your cart is empty')}</BasketBoxListTitle>
              <BasketBoxListDiscr>
                {t('We recommend checking out:')}
              </BasketBoxListDiscr>
              <List>
                <ListItem
                  onClick={() => {
                    saveToStorage('filters', {
                      ...init,
                      product: [homeProductLinks?.jacets[selectedLanguage]],
                    });
                    handlecheckout();
                  }}
                >
                  <ListItemLink
                    to={`shop?product=${homeProductLinks?.jacets[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
                  >
                    <ListImage
                      src={photoJacetsCategory}
                      // width={120}
                      // height={130}
                      alt="Image"
                      loading="lazy"
                    />
                    <ListTitleBox>
                      <ListTitle>{t('Jackets')}</ListTitle>
                    </ListTitleBox>
                  </ListItemLink>
                </ListItem>

                <ListItem
                  onClick={() => {
                    saveToStorage('filters', {
                      ...init,
                      product: [homeProductLinks?.pants[selectedLanguage]],
                    });
                    handlecheckout();
                  }}
                >
                  <ListItemLink
                    to={`shop?product=${homeProductLinks?.pants[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
                  >
                    <ListImage
                      src={photoPantsCategory}
                      // width={120}
                      // height={130}
                      alt="Image"
                      loading="lazy"
                    />
                    <ListTitleBox>
                      <ListTitle>{t('Pants')}</ListTitle>
                    </ListTitleBox>
                  </ListItemLink>
                </ListItem>

                <ListItem
                  onClick={() => {
                    saveToStorage('filters', {
                      ...init,
                      product: [
                        homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage],
                      ],
                    });
                    handlecheckout();
                  }}
                >
                  <ListItemLink
                    to={`shop?product=${homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
                  >
                    <ListImage
                      src={photoHoodiesSweatshirtsCategory}
                      // width={120}
                      // height={130}
                      alt="Image"
                      loading="lazy"
                    />
                    <ListTitleBox>
                      <ListTitle>{t('Hoodies & Sweatshirts')}</ListTitle>
                    </ListTitleBox>
                  </ListItemLink>
                </ListItem>

                <ListItem onClick={() => handlecheckout()}>
                  <ListItemLink to={`/gifts`}>
                    <ListImage
                      src={photoGifts}
                      // width={120}
                      // height={130}
                      alt="Image"
                      loading="lazy"
                    />
                    <ListTitleBox>
                      <ListTitle>{t('Gifts')}</ListTitle>
                    </ListTitleBox>
                  </ListItemLink>
                </ListItem>
              </List>
            </Box>
          )}
        </BasketBoxList>
      </BasketBox>
    </>
  );
};
