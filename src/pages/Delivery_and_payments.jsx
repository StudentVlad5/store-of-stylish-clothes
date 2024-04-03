import React from 'react';
import { useEffect } from 'react';
import { SEO } from 'utils/SEO';
import { useDispatch } from 'react-redux';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { DeliveryAndPayments } from 'components/DeliveryAndPayments/DeliveryAndPayments';

const Delivery_and_payments = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);

  return (
    <>
      <SEO title="Delivery and payments" description="Delivery and payments" />
      <DeliveryAndPayments />
    </>
  );
};

export default Delivery_and_payments;
