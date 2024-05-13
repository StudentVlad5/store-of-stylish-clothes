import React from 'react';
import { selectCurrency } from 'services/selectCurrency';
import {
  CardContainer,
  CardLi,
  IconBasket,
  IconBookmark,
  ImgItem,
} from './ProductCard.styled';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import { useTranslation } from 'react-i18next';

export const ProductCard = ({
  item,
  selectedCurrency,
  status,
  selectedLanguage,
}) => {
  const { t } = useTranslation();
  return (
    <CardContainer>
      {status !== undefined ? (
        <CardLi>
          {t('Free')}:{' '}
          {selectedCurrency === 'ua' &&
            (item.oldPrice_ua - item.newPrice_ua).toFixed(1)}
          {selectedCurrency === 'usd' &&
            (item.oldPrice_usd - item.newPrice_usd).toFixed(1)}
          {selectedCurrency === 'euro' &&
            (item.oldPrice_euro - item.newPrice_euro).toFixed(1)}
          {selectCurrency(selectedCurrency)}
        </CardLi>
      ) : (
        <CardLi>
          {t('Rate')}: {item.rate}
        </CardLi>
      )}
      <CardLi>
        <LazyLoadComponent id={item.mainImage}>
          <ImgItem props={`url(${item.mainImage})`} />
        </LazyLoadComponent>
      </CardLi>
      {/* <CardLi> */}
      {selectedLanguage === 'ua' && (
        <CardLi>
          {item?.title_ua.length < 40
            ? item.title_ua
            : item.title_ua.slice(0, 40) + '...'}
        </CardLi>
      )}
      {selectedLanguage === 'ru' && (
        <CardLi>
          {item?.title_ru.length < 40
            ? item.title_ru
            : item.title_ru.slice(0, 40) + '...'}
        </CardLi>
      )}
      {selectedLanguage === 'en' && (
        <CardLi>
          {item?.title_en.length < 40
            ? item.title_en
            : item.title_en.slice(0, 40) + '...'}
        </CardLi>
      )}
      {selectedLanguage === 'de' && (
        <CardLi>
          {item?.title_de.length < 40
            ? item.title_de
            : item.title_de.slice(0, 40) + '...'}
        </CardLi>
      )}
      <CardLi>
        <span>
          {t('Price')}: {item[`newPrice_${selectedCurrency}`]}
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
