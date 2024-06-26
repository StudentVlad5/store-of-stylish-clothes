import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

import * as SC from './SearchResult.styled';
import { Subtitle } from 'components/baseStyles/CommonStyle.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

import { ReactComponent as MdEast } from 'images/svg/gift-box-svgrepo-com.svg';

import {
  selectCurrency,
  selectNewPrice,
  selectOldPrice,
} from 'services/selectCurrency';
import { Logo } from 'components/Header/Elements/logo/Logo';

export const SearchResult = ({
  onClose,
  toggleMobileMenu,
  searchQuery,
  searchParams,
}) => {
  const [products, setProducts] = useState([]);
  // const [category, setCategory] = useState([]);
  const [total, setTotal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // const [searchParams] = useSearchParams(); //, setSearchParams
  const { t } = useTranslation();
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);

  useEffect(() => {
    const search = searchParams.getAll('search');
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/shop?${searchParams}`);
        setProducts(data.catalog);
        // setCategory(data.group);
        setTotal(data.total);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    if (search && search !== '' && search !== undefined) {
      getData();
    }
  }, [t, searchParams, selectedLanguage]);

  // const getUniqueOptions = key => {
  //   const unique = [...new Set(category?.map(item => item[key]))];
  //   return unique.sort();
  // };

  return (
    <SC.SearchResult>
      <SC.ButtonClose
        type="button"
        onClick={onClose}
        aria-label="Close search result"
      >
        <SC.IconClose />
      </SC.ButtonClose>
      <SC.Wrapper>
        <SC.InnerLeftWrapper onClick={toggleMobileMenu}>
          <Subtitle>{t('recommend')}</Subtitle>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError(t('Whoops, something went wrong'))}
          {products.length > 0 && !error && (
            <SC.Products>
              {products.slice(0, 4).map(card => {
                return (
                  <SC.CardSearch key={card._id} onClick={onClose}>
                    <NavLink
                      to={`shop/byid/${card.article}`}
                      style={{
                        display: 'flex',
                        justifyContent: 'start',
                        alignItems: 'start',
                      }}
                    >
                      <SC.CardImageSearch
                        src={card.mainImage}
                        alt={
                          selectedLanguage === 'de'
                            ? card.title_de
                            : selectedLanguage === 'en'
                            ? card.title_en
                            : selectedLanguage === 'ru'
                            ? card.title_ru
                            : card.title_ua
                        }
                        width="93"
                        height="150"
                        loading="lazy"
                      />
                      <SC.CardTitleSearch>
                        <SC.CardNameSearch>
                          {selectedLanguage === 'de'
                            ? card.title_de
                            : selectedLanguage === 'en'
                            ? card.title_en
                            : selectedLanguage === 'ru'
                            ? card.title_ru
                            : card.title_ua}
                        </SC.CardNameSearch>
                        <SC.CardPricesSearch>
                          {card && (
                            <SC.CardDiscountSearch>
                              {selectNewPrice(selectedCurrency, card)}
                              {selectCurrency(selectedCurrency)}
                            </SC.CardDiscountSearch>
                          )}
                          {card?.oldPrice && (
                            <SC.CardPriceSearch>
                              {selectOldPrice(selectedCurrency, card)}
                              {selectCurrency(selectedCurrency)}
                            </SC.CardPriceSearch>
                          )}
                        </SC.CardPricesSearch>
                        <SC.CardSizeSearch>
                          <div>
                            <span>
                              {selectedLanguage === 'de'
                                ? card?.sizes_de
                                : selectedLanguage === 'en'
                                ? card?.sizes_en
                                : selectedLanguage === 'ru'
                                ? card?.sizes_ru
                                : card?.sizes_ua}
                            </span>
                          </div>
                        </SC.CardSizeSearch>
                      </SC.CardTitleSearch>
                    </NavLink>
                  </SC.CardSearch>
                );
              })}
            </SC.Products>
          )}
          {total > 4 ? (
            <SC.LinkToCatalog to={`/shop?page=1&perPage=12`} onClick={onClose}>
              {t('See more')}
            </SC.LinkToCatalog>
          ) : (
            <>
              <Logo />
              <span> {t("Let's find smth else")}</span>
            </>
          )}
        </SC.InnerLeftWrapper>
        <SC.InnerRightWrapper onClick={toggleMobileMenu}>
          <Subtitle>{t('Goods in the shop')}</Subtitle>
          <SC.Category>
            {products.length > 0 && !error
              ? products.map((card, i) => {
                  return (
                    <li key={i} onClick={onClose}>
                      <NavLink to={`shop/byid/${card.article}`}>
                        {selectedLanguage === 'de'
                          ? card.title_de
                          : selectedLanguage === 'en'
                          ? card.title_en
                          : selectedLanguage === 'ru'
                          ? card.title_ru
                          : card.title_ua}
                      </NavLink>
                    </li>
                  );
                })
              : t('Sorry! Nothing found')}
          </SC.Category>
          <SC.LinkToGifts to={`/gifts`} onClick={onClose}>
            <span>{t('Our ideas for gifts')}</span>
            {/* <MdEast size={18} /> */}
          </SC.LinkToGifts>
        </SC.InnerRightWrapper>
      </SC.Wrapper>
    </SC.SearchResult>
  );
};

SearchResult.propTypes = {
  onClose: PropTypes.func,
  toggleMobileMenu: PropTypes.func,
};
