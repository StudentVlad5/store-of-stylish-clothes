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
import { useTranslation } from 'react-i18next';
import { BtnLight } from 'components/UserComp/UserData/UserData.styled';

export const GiftCard = () => {
  const { t } = useTranslation();

  return (
    <GiftsSection>
      <GiftsInnerContainer>
        <SC.InnerLeft>
          <GiftsSubtitle>{t('The Perfect Present')}</GiftsSubtitle>
          <GiftsHeadline>{t('Give the Gift of Style')}</GiftsHeadline>
          <Description>
            {t(
              "Looking for the ideal gift? Our online store gift cards are the perfect solution! Treat your friends and loved ones to the luxury of choice with our versatile gift cards. Whether they're into fashion-forward clothing, stylish footwear, or trendy accessories, they'll find something they love in our extensive collection. With various denominations available, you can give the gift of endless shopping possibilities. Purchase now and brighten someone's day with the gift of style!",
            )}
          </Description>
          <BtnLight to={`/shop/cards`}>{t('Shop gift card')}</BtnLight>
        </SC.InnerLeft>
        <SC.InnerRight>
          {/* <picture>
            <source
              srcSet={`${card_webp} 1x, ${card_webp_2x} 2x`}
              type="image/webp"
            /> */}
          <img
            src={card_png}
            // srcSet={`${card_png} 590w, ${card_png_2x} 1180w`}
            width={590}
            height={370}
            alt="gift card with logo and plant"
            loading="lazy"
          />
          {/* </picture> */}
        </SC.InnerRight>
      </GiftsInnerContainer>
    </GiftsSection>
  );
};
