import React from 'react';

import {
  Description,
  GiftsHeadline,
  GiftsSection,
  GiftsInnerContainer,
  GiftsSubtitle,
  LinkBtn,
} from '../Gifts.styled';
import * as SC from './GiftCard.styled';

import card_png from 'images/gifts/card.png';
import card_webp from 'images/gifts/card.webp';
import card_png_2x from 'images/gifts/card@2x.png';
import card_webp_2x from 'images/gifts/card@2x.webp';

export const GiftCard = () => {
  return (
    <GiftsSection>
      <GiftsInnerContainer>
        <SC.InnerLeft>
          <GiftsSubtitle>Nature’s gift</GiftsSubtitle>
          <GiftsHeadline>Send the gift that keeps on growing</GiftsHeadline>
          <Description>
            Look no further than our online store gift cards! Choose from a
            variety of amounts and give the gift of endless shopping
            possibilities to your friends and loved ones. Buy now and make
            someone`s day!
          </Description>
          <LinkBtn to={`/catalog/cards`}>Shop gift card</LinkBtn>
        </SC.InnerLeft>
        <SC.InnerRight>
          <picture>
            <source
              srcSet={`${card_webp} 1x, ${card_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={card_png}
              srcSet={`${card_png} 590w, ${card_png_2x} 1180w`}
              width={590}
              height={370}
              alt="gift card with logo and plant"
              loading="lazy"
            />
          </picture>
        </SC.InnerRight>
      </GiftsInnerContainer>
    </GiftsSection>
  );
};
