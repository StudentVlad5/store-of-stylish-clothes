import React from 'react';
import { Container } from 'components/baseStyles/CommonStyle.styled';
import { GiftsHeading } from './Heading/Heading';
import { Ideas } from './Ideas/Ideas';
import { GiftCard } from './GiftCard/GiftCard';
import { Corporate } from './Corporate/Corporate';

export const Gifts = () => {
  return (
    <>
      <GiftsHeading />
      <Container>
        <Ideas />
        <GiftCard />
        <Corporate />
      </Container>
    </>
  );
};
