import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';

import { CatalogList } from '../Catalog/CatalogList/CatalogList';
import { Pagination } from 'utils/pagination';
import { getFavorites } from 'services/APIservice';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';

import * as SC from './Favorites.styled';
import { useSelector } from 'react-redux';
import { selectId } from 'redux/auth/selectors';
import { ShopBox, ShopBoxTitle } from 'components/UserComp/UserOrders/UserOrders.styled';
import { BtnBrown } from 'components/UserComp/UserData/UserData.styled';

let perPage = 12;

export const Favorites = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalPage, setTotalPage] = useState(0);
  const [page, setPages] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const id = useSelector(selectId);
  const { t } = useTranslation();

  const setPage = toPage => {
    searchParams.set('page', toPage);
    setPages(toPage);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (page === 1) {
      setSearchParams({ page: 1, perPage });
    }
  }, []);

  useEffect(() => {
    if (!page || !perPage) {
      const params = { page: 1, perPage };
      setPages(1);
      setSearchParams(params);
    }

    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await getFavorites(
          `/auth/catalog/${id}?${searchParams}`,
        );
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
        setProducts(data.data);
        setTotalPage(Math.ceil(data.total / perPage));
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t, page, perPage, searchParams]);

  return (
    <SC.CatalogContainer>
      <SC.CatalogSection>
        <SC.GridContainer>
          <SC.GridWrapper>
            {isLoading ? onLoading() : onLoaded()}
            {error && onFetchError(t('Whoops, something went wrong'))}
            {products.length > 0 && !error && (
              <CatalogList products={products} />
            )}

            <ShopBox>
              <ShopBoxTitle>{"You don't have favorite products"}</ShopBoxTitle>
              <BtnBrown>Shop</BtnBrown>
            </ShopBox>

            <Pagination
              totalPage={totalPage}
              changePage={setPage}
              page={page}
            />
          </SC.GridWrapper>
        </SC.GridContainer>
      </SC.CatalogSection>
    </SC.CatalogContainer>
  );
};

Favorites.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.shape({
        size: PropTypes.number,
        unit: PropTypes.string,
        _id: PropTypes.string,
      }),
      hardToKill: PropTypes.string,
      rare: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
      category: PropTypes.string,
    }),
  ),
};
