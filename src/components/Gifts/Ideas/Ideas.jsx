import React, { useContext } from 'react';
import { saveToStorage } from 'services/localStorService';
import { GiftsSection } from '../Gifts.styled';
import * as SC from './Ideas.styled';

import img1_png from 'images/gifts/img1.png';
import img1_png_2x from 'images/gifts/img1@2x.png';
import img1_webp from 'images/gifts/img1.webp';
import img1_webp_2x from 'images/gifts/img1@2x.webp';
import img2_png from 'images/gifts/img2.png';
import img2_png_2x from 'images/gifts/img2@2x.png';
import img2_webp from 'images/gifts/img2.webp';
import img2_webp_2x from 'images/gifts/img2@2x.webp';
import img3_png from 'images/gifts/img3.png';
import img3_png_2x from 'images/gifts/img3@2x.png';
import img3_webp from 'images/gifts/img3.webp';
import img3_webp_2x from 'images/gifts/img3@2x.webp';
import img4_png from 'images/gifts/img4.png';
import img4_png_2x from 'images/gifts/img4@2x.png';
import img4_webp from 'images/gifts/img4.webp';
import img4_webp_2x from 'images/gifts/img4@2x.webp';
import { useTranslation } from 'react-i18next';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { homeProductLinks } from 'BASE_CONST/Base-const';

export const Ideas = () => {
  const { t } = useTranslation();
  const { selectedLanguage, selectedCurrency } = useContext(StatusContext);

  const init = {
    category: [],
    currency: selectedCurrency,
    man_woman: [],
    maxPrice: '5000',
    minPrice: '0',
    page: 1,
    perPage: 12,
    product: [],
    sizes: [],
  };

  return (
    <GiftsSection>
      <SC.HeadlineIdeas>{t('Our ideas for gifts')}</SC.HeadlineIdeas>
      <SC.IdeasList>
        <SC.IdeasItem>
          <img
            src={img1_webp_2x}
            width={285}
            height={400}
            alt="Gift clothes"
            loading="lazy"
          />
          <SC.Link
            to={`/shop?category=${homeProductLinks?.clothing[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice}`}
            onClick={() => {
              saveToStorage('filters', {
                ...init,
                category: [homeProductLinks?.clothing[selectedLanguage]],
              });
            }}
          >
            {t('Clothes')}
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <img
            src={img3_webp_2x}
            width={285}
            height={400}
            alt="Gift Accessories"
            loading="lazy"
          />
          <SC.Link
            to={`/shop?category=${homeProductLinks?.accessories[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice}`}
            onClick={() => {
              saveToStorage('filters', {
                ...init,
                category: [homeProductLinks?.accessories[selectedLanguage]],
              });
            }}
          >
            {t('Accessories')}
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <img
            src={img2_webp_2x}
            width={285}
            height={400}
            alt="Gift Shoes"
            loading="lazy"
          />
          <SC.Link
            to={`/shop?category=${homeProductLinks?.footwear[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice}`}
            onClick={() => {
              saveToStorage('filters', {
                ...init,
                category: [homeProductLinks?.footwear[selectedLanguage]],
              });
            }}
          >
            {t('Shoes')}
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <picture>
            <source
              srcSet={`${img4_webp} 1x, ${img4_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={img4_png}
              srcSet={`${img4_png} 285w, ${img4_png_2x} 570w`}
              width={285}
              height={400}
              alt="Gift for ready style"
              loading="lazy"
            />
          </picture>
          <SC.Link
            to={`/shop`}
            onClick={() => {
              saveToStorage('filters', {
                ...init,
                // category: [homeProductLinks?.footwear[selectedLanguage]],
              });
            }}
          >
            Best for beginners
          </SC.Link>
        </SC.IdeasItem>
      </SC.IdeasList>
    </GiftsSection>
  );
};
