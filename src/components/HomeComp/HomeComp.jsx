import React from 'react';
import { Hero } from './Hero/Hero';
import { ListOfDiscountsItems } from './ListOfDiscountsItems/ListOfDiscountsItems';
import { ListOfRatesItems } from './ListOfRatesItems/ListOfRatesItems';

export const HomeComp = () => {
  return (
    <>
      <Hero />
      <ListOfRatesItems />
      <ListOfDiscountsItems />
    </>
  );
};
