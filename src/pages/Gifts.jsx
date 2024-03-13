import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { Gifts } from 'components/Gifts/Gifts';

const GiftsPage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO title="Gifts" description="Gifts" />
      <Gifts />
    </>
  );
};

export default GiftsPage;
