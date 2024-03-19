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

export const GiftsHeading = () => {
  return (
    <SC.HeadingSection>
      <SC.ImageContainer>
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet={`${mainImage_webp} 1x, ${mainImage_webp_2x} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width:1439px)"
            srcSet={`${mobImage_webp} 1x, ${mobImage_webp_2x} 2x`}
            type="image/webp"
          />
          <img
            src={mobImage_png}
            srcSet={`${mainImage_png} 1440w, ${mainImage_png_2x} 2880w, ${mobImage_png} 840w,${mobImage_png_2x} 1680w`}
            sizes="(min-width:1440px) 1440px, (max-width:1439px) 840px, 100vw"
            width={1440}
            height={400}
            alt="Plants"
            loading="lazy"
          />
        </picture>
        <SC.Background>
          <Title>Gifts</Title>
          <LinkBtn to={`/shop/plants?page=1&perPage=12`}>Shop now</LinkBtn>
        </SC.Background>
      </SC.ImageContainer>
    </SC.HeadingSection>
  );
};
