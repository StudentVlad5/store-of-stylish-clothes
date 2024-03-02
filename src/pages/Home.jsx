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
        title="HomeForest Shop"
        description="Take good care of your your plant. You can buy the best plants for your house or apartment. Get advice and help with plant care and maintenance"
      />
      <HomeComp />
    </>
  );
};

export default HomePage;
