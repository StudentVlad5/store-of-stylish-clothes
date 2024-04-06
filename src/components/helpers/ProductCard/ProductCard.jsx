import React from 'react';
import { selectCurrency } from 'services/selectCurrency';
import {
  CardContainer,
  CardLi,
  IconBasket,
  IconBookmark,
  ImgItem,
} from './ProductCard.styled';
import { useTranslation } from 'react-i18next';

export const ProductCard = ({ item, selectedCurrency, status }) => {
  const {t} = useTranslation();

  return (
    <CardContainer>
      {status !== undefined ? (
        <CardLi>
          {t("Free")}:{' '}
          {(
            ((item.oldPrice_ua - item.newPrice_ua) / item.oldPrice_ua) *
            100
          ).toFixed(1)}
          %
        </CardLi>
      ) : (
        <CardLi>{t("Rate")}: {item.rate}</CardLi>
      )}
      <CardLi>
        <ImgItem props={`url(${item.mainImage})`} />
      </CardLi>
      <CardLi>
        {item.title.length < 40 ? item.title : item.title.slice(0, 40) + '...'}
      </CardLi>
      <CardLi>
        <span>
          Price: {item[`newPrice_${selectedCurrency}`]}
          {selectCurrency(selectedCurrency)}
        </span>
        <span>
          <IconBookmark />
          <IconBasket />
        </span>
      </CardLi>
    </CardContainer>
  );
};
