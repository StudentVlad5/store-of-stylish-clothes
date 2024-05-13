import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { SEO } from 'utils/SEO';
import { fetchData } from '../services/APIservice';
import { ProductCard } from '../components/ProductCard/ProductCard';
import { StylesCard } from '../components/StylesCard/StylesCard';
import { onLoading, onLoaded } from 'components/helpers/Loader/Loader';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { StatusContext } from 'components/ContextStatus/ContextStatus';

const ProductCardPage = ({ addToBasket }) => {
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const routeParams = useParams();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/shop/byid/${routeParams.id}`);
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
    getData();
  }, [routeParams.id, t]);

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO
        title={t('Product card')}
        description_ua={`Product Card Page ${product}`}
        keywords_ua={`Product Card Page ${product?.title}`}
        description={`Product Card Page ${product?.description}`}
      />
      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {Object.keys(product).length > 0 &&
        !error &&
        !product[0]?.list_of_articles && (
          <ProductCard
            item={product}
            addToBasket={addToBasket}
            selectedCurrency={selectedCurrency}
            selectedLanguage={selectedLanguage}
          />
        )}
      {Object.keys(product).length > 0 &&
        !error &&
        product[0]?.list_of_articles && (
          <StylesCard
            item={product}
            addToBasket={addToBasket}
            selectedCurrency={selectedCurrency}
            selectedLanguage={selectedLanguage}
          />
        )}
    </>
  );
};

export default ProductCardPage;
