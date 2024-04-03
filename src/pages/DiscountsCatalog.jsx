import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO } from 'utils/SEO';
import { Catalog } from '../components/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { DiscountCatalog } from 'components/DiscountCatalog/DiscountCatalog';

const DiscountsShop = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, [location]);

  return (
    <>
      <SEO title="Catalog" description="Catalog of goods" />
      <DiscountCatalog />
    </>
  );
};

export default DiscountsShop;
