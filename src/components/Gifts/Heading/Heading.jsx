import React from 'react';

import { Title } from 'components/baseStyles/CommonStyle.styled';
import { LinkBtn } from '../Gifts.styled';
import * as SC from './Heading.styled';

import mobImage_png from 'images/gifts/mob.png';
import mobImage_png_2x from 'images/gifts/mob@2x.png';
import mobImage_webp from 'images/gifts/mob.webp';
import mobImage_webp_2x from 'images/gifts/mob@2x.webp';

import mainImage_png from 'images/gifts/desktop.png';
import mainImage_png_2x from 'images/gifts/desktop@2x.png';
import mainImage_webp from 'images/gifts/desktop.webp';
import mainImage_webp_2x from 'images/gifts/desktop@2x.webp';
import { useTranslation } from 'react-i18next';

export const GiftsHeading = () => {
  const { t } = useTranslation();

  return (
    <SC.HeadingSection>
      <SC.ImageContainer>
        <img src={mainImage_webp_2x} width={1280} height={400} alt="" />
        <SC.Background>
          <Title>{t('Gifts')}</Title>
          <LinkBtn to={`/shop`}>{t('Shop now')}</LinkBtn>
        </SC.Background>
      </SC.ImageContainer>
    </SC.HeadingSection>
  );
};
