import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { Catalog } from '../components/Catalog/Catalog';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';

const CatalogPage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO title="Catalog" description="Catalog of goods" />
      <Catalog />
    </>
  );
};

export default CatalogPage;
