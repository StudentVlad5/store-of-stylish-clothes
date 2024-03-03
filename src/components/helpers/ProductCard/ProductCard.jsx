import React from 'react';
import {
  CardContainer,
  CardLi,
  IconBasket,
  IconBookmark,
  ImgItem,
} from './ProductCard.styled';
import photoProductItem from 'images/hero/product_item.webp';

export const ProductCard = () => {
  const item = {
    id: 1,
    status: 'new',
    photo: photoProductItem,
    discription: 'Vest Staff em black',
    price: '14.55',
    currency: '$',
    discount: '0',
  };

  return (
    <CardContainer>
      <CardLi>{item.status}</CardLi>
      <CardLi>
        <ImgItem props={`url(${item.photo})`} />
      </CardLi>
      <CardLi>{item.discription}</CardLi>
      <CardLi>
        <span>
          Price: {item.currency}
          {item.price}
        </span>
        <span>
          <IconBookmark />
          <IconBasket />
        </span>
      </CardLi>
    </CardContainer>
  );
};
