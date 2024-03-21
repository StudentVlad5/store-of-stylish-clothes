import React, { useState, useEffect } from 'react';
// import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import photoManCategory from 'images/hero/man_2x.webp';
import photoWomanCategory from 'images/hero/woman_2x.webp';
import photoJacetsCategory from 'images/hero/category/jacket_2x.webp';
import photoPantsCategory from 'images/hero/category/pants_2x.webp';
import photoFootwearCategory from 'images/hero/category/footwear_2x.webp';
import photoHoodiesSweatshirtsCategory from 'images/hero/category/hoodies_2x.webp';

// import { fetchData } from 'services/APIservice';
// import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
// import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

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

export const Hero = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  // useEffect(() => {
  //   (async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData(`/shop/plants`);
  //       setProducts(data.catalog);
  //       if (!data) {
  //         return onFetchError(t('Whoops, something went wrong'));
  //       }
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   })();
  // }, [t]);

  return (
    <>
      <HeroSection>
        <HeroContainer>
          <LinkCategory to={'/shop/men'}>
            <HeroItem props={`url(${photoManCategory})`}>
              <ImgTitle>Men</ImgTitle>
            </HeroItem>
          </LinkCategory>
          <LinkCategory to={'/shop/women'}>
            <HeroItem props={`url(${photoWomanCategory})`}>
              <ImgTitle>Women</ImgTitle>
            </HeroItem>
          </LinkCategory>
        </HeroContainer>
      </HeroSection>

      <CategorySection>
        <HeroContainer>
          <LinkCategory to={'/shop/jacets'}>
            <CategoryItem props={`url(${photoJacetsCategory})`}>
              <CategoryTitle>Jacets</CategoryTitle>
            </CategoryItem>
          </LinkCategory>
          <LinkCategory to={'/shop/jacets'}>
            <CategoryItem props={`url(${photoPantsCategory})`}>
              <CategoryTitle>Pants</CategoryTitle>
            </CategoryItem>
          </LinkCategory>
          <LinkCategory to={'/shop/jacets'}>
            <CategoryItem props={`url(${photoHoodiesSweatshirtsCategory})`}>
              <CategoryTitle>Hoodies & Sweatshirts</CategoryTitle>
            </CategoryItem>
          </LinkCategory>
          <LinkCategory to={'/shop/jacets'}>
            <CategoryItem props={`url(${photoFootwearCategory})`}>
              <CategoryTitle>Footwear</CategoryTitle>
            </CategoryItem>
          </LinkCategory>
        </HeroContainer>
      </CategorySection>
      {/* {isLoading ? onLoading() : onLoaded()} */}
    </>
  );
};
