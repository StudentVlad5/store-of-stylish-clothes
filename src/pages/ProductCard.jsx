import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SEO } from 'utils/SEO';
import { fetchData } from '../services/APIservice';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';

const ProductCardPage = ({ addToBasket }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const routeParams = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog/byid/${routeParams.id}`);
        setProduct(data);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }

    if (routeParams.id !== '' && routeParams !== undefined) {
      getData();
    }
  }, [routeParams.id, t]);

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO
        title={t('HomeForest Product card')}
        description="Product Card Page"
      />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {Object.keys(product).length > 0 && !error && (
        <ProductCard product={product} addToBasket={addToBasket} />
      )}
    </>
  );
};

export default ProductCardPage;
