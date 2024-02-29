import React from 'react';
import { Health } from './Health/Health';
import { Care } from './Care/Care';
import { FeedbackComp } from './Feedback/Feedback';
import { ProductsBox } from './Products/Products.styled';
import { NewArrivals } from './NewArrivals/NewArrivals';

export const HomeComp = () => {
  return (
    <ProductsBox>
      <Health />
      <NewArrivals />
      <Care />
      <FeedbackComp />
    </ProductsBox>
  );
};
