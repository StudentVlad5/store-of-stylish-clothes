import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { HomeComp } from 'components/HomeComp/HomeComp';

const HomePage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <>
      <SEO
        title="Quillis"
        description="
        You deserve a reward, so you have the opportunity to choose the most stylish clothes and shoes from the store
        Delight yourself with beautiful things"
      />
      <HomeComp />
    </>
  );
};

export default HomePage;
