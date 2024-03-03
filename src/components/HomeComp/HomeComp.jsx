import React from 'react';
import { Hero } from './Hero/Hero';
import { ListOfNewItems } from './ListOfNewItems/ListOfNewItems';
import { ListOfDiscountItems } from './ListOfDiscountItems/ListOfDiscountItems';

export const HomeComp = () => {
  return (
    <>
      <Hero />
      <ListOfNewItems />
      <ListOfDiscountItems />
    </>
  );
};
