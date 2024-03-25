import React, { useState, useEffect, useContext } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import photoManCategory from 'images/hero/man_2x.webp';
import photoWomanCategory from 'images/hero/woman_2x.webp';
import photoJacetsCategory from 'images/hero/category/jacket_2x.webp';
import photoPantsCategory from 'images/hero/category/pants_2x.webp';
import photoFootwearCategory from 'images/hero/category/footwear_2x.webp';
import photoHoodiesSweatshirtsCategory from 'images/hero/category/hoodies_2x.webp';
import { homeProductLinks } from 'BASE_CONST/Base-const';

import {
  HeroSection,
  CategorySection,
  HeroContainer,
  HeroItem,
  LinkCategory,
  ImgTitle,
  CategoryItem,
  CategoryTitle,
} from './Hero.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { saveToStorage } from 'services/localStorService';
import { AboutContent } from '../AboutContent/AboutContent';
import { SectionWrapper } from 'components/baseStyles/CommonStyle.styled';

export const Hero = () => {
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
    <>
      <HeroSection>
        <HeroContainer>
          <LinkCategory
            to={`/shop`}
            onClick={() =>
              saveToStorage('filters', {
                ...init,
                man_woman: [homeProductLinks?.man[selectedLanguage]],
              })
            }
          >
            <HeroItem props={`url(${photoManCategory})`}>
              <ImgTitle>Men</ImgTitle>
            </HeroItem>
          </LinkCategory>
          <LinkCategory
            to={'/shop'}
            onClick={() =>
              saveToStorage('filters', {
                ...init,
                man_woman: [homeProductLinks?.woman[selectedLanguage]],
              })
            }
          >
            <HeroItem props={`url(${photoWomanCategory})`}>
              <ImgTitle>Women</ImgTitle>
            </HeroItem>
          </LinkCategory>
        </HeroContainer>
      </HeroSection>

      <AboutContent />

      <CategorySection>
        <SectionWrapper>
          <HeroContainer>
            <LinkCategory
              to={'/shop'}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  product: [homeProductLinks?.jacets[selectedLanguage]],
                })
              }
            >
              <CategoryItem props={`url(${photoJacetsCategory})`}>
                <CategoryTitle>Jacets</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
            <LinkCategory to={'/shop'}>
              <CategoryItem
                props={`url(${photoPantsCategory})`}
                onClick={() =>
                  saveToStorage('filters', {
                    ...init,
                    product: [homeProductLinks?.pants[selectedLanguage]],
                  })
                }
              >
                <CategoryTitle>Pants</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
            <LinkCategory
              to={'/shop'}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  product: [
                    homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage],
                  ],
                })
              }
            >
              <CategoryItem props={`url(${photoHoodiesSweatshirtsCategory})`}>
                <CategoryTitle>Hoodies & Sweatshirts</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
            <LinkCategory
              to={'/shop'}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  category: [homeProductLinks?.footwear[selectedLanguage]],
                })
              }
            >
              <CategoryItem props={`url(${photoFootwearCategory})`}>
                <CategoryTitle>Footwear</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
          </HeroContainer>
        </SectionWrapper>
      </CategorySection>
      {/* {isLoading ? onLoading() : onLoaded()} */}
    </>
  );
};
