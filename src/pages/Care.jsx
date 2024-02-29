import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { Care } from '../components/Care/Care';

const CarePage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO title="HomeForest Care" description="Care of your plants" />
      <Care />
    </>
  );
};

export default CarePage;
