import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import { SEO } from 'utils/SEO';
import { Basket } from 'components/Basket/Basket';

const BasketPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      addHeaderBottom({
        headerBottom: 'addHeaderBottom',
      }),
    );
  }, []);

  return (
    <>
      <SEO title="Basket" description="Your shopping bag" />
      <Basket />
    </>
  );
};

export default BasketPage;
