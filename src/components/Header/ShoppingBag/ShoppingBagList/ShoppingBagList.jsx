import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { reloadValue } from 'redux/reload/selectors';
import { addReload } from 'redux/reload/slice';
import { removeItemInBasket, updateItemInBasket } from 'services/APIservice';
import { getFromStorage, saveToStorage } from 'services/localStorService';
import {
  DiscrBox,
  RemoveBtn,
  DiscrBoxDiv,
  DiscrBoxForText,
  DiscrBoxSize,
  DiscrBoxTitle,
  DiscrTitle,
  OrderItem,
  Quantity,
  QuantityBox,
  IconQuantityBtn,
  ShoppingBagImg,
} from './ShoppingBagList.styled';
import {
  BasketCompIconClose,
  BasketCompImg,
  BasketCompItem,
  BoxForDiscrData,
  BtnItem,
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
  IconBtn,
} from 'components/Basket/BasketList/BasketList.styled';
import { ReactComponent as Minus } from 'images/svg/minus.svg';
import { ReactComponent as Plus } from 'images/svg/plus.svg';
import { addToBasket } from 'redux/basket/operations';
import { Link } from 'react-router-dom';

export const ShoppingBagList = ({
  optionData,
  setDatas,
  datas,
  idx,
  statusBasket,
}) => {
  const {
    _id,
    currency,
    selectedCurrency,
    newPrice,
    discount,
    images,
    mainImage,
    oldPrice,
    quantity,
    title,
    total,
    name,
    options,
    article,
  } = optionData;
  if (statusBasket !== true) {
    statusBasket = false;
  }
  // ----------------------------------------->

  // console.log(optionData);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [userAnonimusID] = useState(
    getFromStorage('userAnonimusID') ? getFromStorage('userAnonimusID') : '',
  );
  const dispatch = useDispatch();
  const reload = useSelector(reloadValue);

  async function removeItem(_id, size) {
    setIsLoading(true);
    try {
      const { data } = await removeItemInBasket(`/basket/${userAnonimusID}`, {
        size,
        _id,
      });
      if (!data) {
        return onFetchError(t('Whoops, something went wrong'));
      }
      setDatas([data]);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
      dispatch(addReload(true));
    }
  }
  // ----------------------------------------->

  const removeProductHandler = (_id, size) => {
    removeItem(_id, size);
    dispatch(addReload(true));
  };

  async function updateItem(items) {
    console.log('items', items);
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
        dispatch(addReload(true));
        saveToStorage('basketData', [{ optionData, _id }]);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
  }

  const initialPrice = newPrice * quantity;
  const [price, setPrice] = useState(initialPrice);
  let newData = [];

  const handleDecrease = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      const newPriceV = newValue * newPrice;
      setPrice(newPriceV);
      newData = { ...datas[0].optionData[idx] };
      newData.quantity = newValue;

      let options = [...datas[0].optionData];
      options[idx] = newData;
      let array = [
        {
          _id,
          optionData: options,
        },
      ];

      setDatas(prev => array);
      updateItem(array[0].optionData);
    }
  };

  const handleIncrease = () => {
    if (quantity < total) {
      const newValue = quantity + 1;
      const newPricev = newValue * newPrice;
      setPrice(newPricev);
      newData = { ...datas[0].optionData[idx] };
      newData.quantity = newValue;

      let options = [...datas[0].optionData];
      options[idx] = newData;
      let array = [
        {
          _id,
          optionData: options,
        },
      ];

      setDatas(prev => array);
      updateItem(array[0].optionData);
    }
  };

  return statusBasket ? (
    <BasketCompItem>
      <Link
        to={`${window.location.origin}/shop/byid/${article}`}
        target="_blank"
      >
        <BasketCompImg
          // src={BASE_URL_IMG + images[0]}
          src={mainImage}
          width={107}
          height={140}
          alt="Image"
          loading="lazy"
        />
      </Link>
      <BoxForDiscrData>
        <DiscrDataList>
          <DiscrDataListItem>
            <DiscrDataListItemHeading>
              <DiscrDataListItemTitle>{title}</DiscrDataListItemTitle>
              <DiscrDataListItemTitlePrice>
                {price}
                {currency}
              </DiscrDataListItemTitlePrice>
            </DiscrDataListItemHeading>
          </DiscrDataListItem>
          <table>
            <DiscrDataTable>
              <DiscrDataTableLine>
                <DiscrDataTableHead>Size</DiscrDataTableHead>
                {options === null ? (
                  <DiscrDataTableData>-</DiscrDataTableData>
                ) : (
                  <DiscrDataTableData>{options}</DiscrDataTableData>
                )}
              </DiscrDataTableLine>

              <DiscrDataTableLine>
                <DiscrDataTableHead>Price</DiscrDataTableHead>
                {/* {discount !== 0 ? ( */}
                <DiscrDataTableData>
                  <DiscrDataListItemPrice $red>
                    {newPrice}
                    {currency}
                  </DiscrDataListItemPrice>
                  <DiscrDataListItemPrice>
                    {oldPrice}
                    {currency}
                  </DiscrDataListItemPrice>
                </DiscrDataTableData>
                {/* ) : (
                  <DiscrDataTableData>
                    <DiscrDataListItemPrice $current>
                      {newPrice}
                      {currency}
                    </DiscrDataListItemPrice>
                  </DiscrDataTableData>
                )} */}
              </DiscrDataTableLine>

              <DiscrDataTableLine>
                <DiscrDataTableHead>Quantity</DiscrDataTableHead>
                <DiscrDataTableData>
                  <IconBtn
                    type="button"
                    aria-label="minus"
                    onClick={handleDecrease}
                    disabled={quantity <= 1}
                  >
                    <Minus />
                  </IconBtn>
                  <span>{quantity}</span>
                  <IconBtn
                    type="button"
                    aria-label="plus"
                    onClick={handleIncrease}
                    disabled={quantity >= total}
                  >
                    <Plus />
                  </IconBtn>
                </DiscrDataTableData>
              </DiscrDataTableLine>
            </DiscrDataTable>
          </table>
        </DiscrDataList>

        <BtnItem
          onClick={() => {
            removeProductHandler(_id, title);
          }}
        >
          <BasketCompIconClose />
          remove
        </BtnItem>
      </BoxForDiscrData>
    </BasketCompItem>
  ) : (
    <>
      <OrderItem>
        {mainImage && (
          <Link to={`${window.location.origin}/shop/byid/${article}`}>
            <ShoppingBagImg
              // src={BASE_URL_IMG + images[0]}
              src={mainImage}
              alt="Image"
              loading="lazy"
            />
          </Link>
        )}
        <DiscrBoxDiv>
          <DiscrBox>
            <DiscrBoxForText>
              <DiscrBoxTitle>
                <DiscrTitle style={{ width: 170 }}>{title}</DiscrTitle>
                <DiscrTitle>
                  {newPrice}
                  {currency}
                </DiscrTitle>
              </DiscrBoxTitle>
              <DiscrBoxSize>{options}</DiscrBoxSize>
            </DiscrBoxForText>
            <QuantityBox>
              <Quantity>
                <IconQuantityBtn
                  type="button"
                  aria-label="minus"
                  onClick={handleDecrease}
                  disabled={quantity <= 1}
                >
                  <Minus />
                </IconQuantityBtn>
                <span>{quantity}</span>
                <IconQuantityBtn
                  type="button"
                  aria-label="plus"
                  onClick={handleIncrease}
                  disabled={quantity >= total}
                >
                  <Plus />
                </IconQuantityBtn>
              </Quantity>
              <RemoveBtn
                onClick={() => {
                  removeProductHandler(_id, title);
                }}
              >
                remove
              </RemoveBtn>
            </QuantityBox>
          </DiscrBox>
        </DiscrBoxDiv>
      </OrderItem>
    </>
  );
};
