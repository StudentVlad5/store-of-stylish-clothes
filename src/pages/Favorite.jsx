import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { Favorites } from 'components/Favorites/Favorites';

const FavoritePage = () => {
  const dispatch = useDispatch();
  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO title="Favorite" description="Favorite of goods" />
      <Favorites />
    </>
  );
};

export default FavoritePage;
