import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { addHeaderBottom } from 'redux/header_bottom/operation';
import CheckOut from 'components/CheckOut/Checkout';

const CheckOutPage = () => {
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
      <SEO title="CheckOut steps" description="CheckOut for making order" />
      <CheckOut />
    </>
  );
};

export default CheckOutPage;
