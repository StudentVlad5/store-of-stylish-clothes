import React, { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { saveToStorage } from 'services/localStorService';

import * as SC from './SearchResult.styled';
import { Subtitle } from 'components/baseStyles/CommonStyle.styled';

import { MdEast } from 'react-icons/md';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

export const SearchResult = ({ onClose, toggleMobileMenu }) => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [total, setTotal] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [searchParams] = useSearchParams(); //, setSearchParams
  const { t } = useTranslation();

  useEffect(() => {
    if (searchParams.get('search') !== null) {
      (async function getData() {
        setIsLoading(true);
        try {
          const { data } = await fetchData(`/catalog?${searchParams}`);
          setProducts(data.catalog);
          setCategory(data.group);
          setTotal(data.total);
          if (!data) {
            return onFetchError(t('Whoops, something went wrong'));
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    } else {
      (async function getData() {
        setIsLoading(true);
        try {
          const { data } = await fetchData(`/catalog/plants?perPage=12&page=1`);
          setProducts(data.catalog);
          setCategory(data.catalog);
          setTotal(data.length);
          if (!data) {
            return onFetchError(t('Whoops, something went wrong'));
          }
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      })();
    }
  }, [t, searchParams]);

  const getUniqueOptions = key => {
    const unique = [...new Set(category?.map(item => item[key]))];
    return unique.sort();
  };

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
          <Subtitle>recommend</Subtitle>
          {isLoading ? onLoading() : onLoaded()}
          {error && onFetchError(t('Whoops, something went wrong'))}
          {products.length > 0 && !error && (
            <SC.Products>
              {products.slice(0, 4).map(card => {
                return (
                  <SC.CardSearch key={card._id} onClick={onClose}>
                    <NavLink to={`/catalog/byid/${card._id}`}>
                      <SC.CardImageSearch
                        src={BASE_URL_IMG + card.images[0]}
                        alt={card.name}
                        width="93"
                        height="150"
                        loading="lazy"
                      />
                      <SC.CardTitleSearch>
                        <SC.CardNameSearch>{card.name}</SC.CardNameSearch>
                        <SC.CardPricesSearch>
                          {card.currentPrice && (
                            <SC.CardDiscountSearch>
                              {card.currentPrice}
                              {card.currency}
                            </SC.CardDiscountSearch>
                          )}
                          {card.oldPrice && (
                            <SC.CardPriceSearch>
                              {card.oldPrice}
                              {card.currency}
                            </SC.CardPriceSearch>
                          )}
                        </SC.CardPricesSearch>
                        <SC.CardSizeSearch>
                          <div>
                            {card.options.map(option => {
                              return (
                                option.total != 0 && (
                                  <span key={option._id}>{option.title}</span>
                                )
                              );
                            })}
                          </div>
                        </SC.CardSizeSearch>
                      </SC.CardTitleSearch>
                    </NavLink>
                  </SC.CardSearch>
                );
              })}
            </SC.Products>
          )}
          {total > 4 && (
            <SC.LinkToCatalog
              to={`/catalog?page=1&perPage=12`}
              onClick={onClose}
            >
              See more
            </SC.LinkToCatalog>
          )}
        </SC.InnerLeftWrapper>
        <SC.InnerRightWrapper onClick={toggleMobileMenu}>
          <Subtitle>Type of plants</Subtitle>
          <SC.Category>
            {getUniqueOptions('typeOfPlants').map((card, i) => {
              return (
                <div key={i} onClick={onClose}>
                  <NavLink to={`/catalog?page=1&perPage=12&category=plants`}>
                    Indoor Plants /
                  </NavLink>
                  <NavLink
                    to={`/catalog?page=1&perPage=12&typeOfPlants=${card}`}
                    onClick={e => {
                      saveToStorage('typeOfPlants', card);
                    }}
                  >
                    <span> {card}</span>
                  </NavLink>
                </div>
              );
            })}
          </SC.Category>
          <SC.LinkToGifts to={`/gifts`} onClick={onClose}>
            <span>Our ideas for gifts</span>
            <MdEast size={18} />
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
