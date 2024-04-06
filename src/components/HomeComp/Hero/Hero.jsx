import React, { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import photoManCategory from 'images/hero/man_2x.webp';
import photoWomanCategory from 'images/hero/woman_2x.webp';
import photoJacetsCategory from 'images/hero/category/jacket_2x.webp';
import photoPantsCategory from 'images/hero/category/pants_2x.webp';
import photoFootwearCategory from 'images/hero/category/footwear_2x.webp';
import photoHoodiesSweatshirtsCategory from 'images/hero/category/hoodies_2x.webp';
import { homeProductLinks } from 'BASE_CONST/Base-const';
import { ReactComponent as WhiteArrow } from 'images/svg/white_arrow.svg';

import {
  HeroSection,
  CategorySection,
  HeroContainer,
  HeroItem,
  LinkCategory,
  ImgTitle,
  CategoryItem,
  CategoryTitle,
  SideBarTitle,
  TitleForBtnReadyStyle,
  ContainerForBtnReadyStyle,
  ButtonForReadyStyle,
  HeroImgBox,
} from './Hero.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import { saveToStorage } from 'services/localStorService';
import { AboutContent } from '../AboutContent/AboutContent';
import { SectionWrapper } from 'components/baseStyles/CommonStyle.styled';
import { Link } from 'react-router-dom';

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
          <HeroImgBox>
            <LinkCategory
              to={`/shop?man_woman=${homeProductLinks?.man[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  man_woman: [homeProductLinks?.man[selectedLanguage]],
                })
              }
            >
              <HeroItem props={`url(${photoManCategory})`}>
                <ImgTitle>{t('Men')}</ImgTitle>
              </HeroItem>
            </LinkCategory>
            <LinkCategory
              to={`/shop?man_woman=${homeProductLinks?.woman[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  man_woman: [homeProductLinks?.woman[selectedLanguage]],
                })
              }
            >
              <HeroItem props={`url(${photoWomanCategory})`}>
                <ImgTitle>{t('Women')}</ImgTitle>
              </HeroItem>
            </LinkCategory>
          </HeroImgBox>

          <ContainerForBtnReadyStyle>
            <SideBarTitle>{t('Choose your perfect style')}</SideBarTitle>
            <Link to="/ready_style" style={{ textDecoration: 'none' }}>
              <ButtonForReadyStyle
                type="button"
                title="Button for choose your perfect style"
                aria-label="click for choose your perfect style"
              >
                <TitleForBtnReadyStyle TitleForBtnReadyStyle>
                  {t('Explore')}
                </TitleForBtnReadyStyle>
                <WhiteArrow />
              </ButtonForReadyStyle>
            </Link>
          </ContainerForBtnReadyStyle>
        </HeroContainer>
      </HeroSection>

      <AboutContent />

      <CategorySection>
        <SectionWrapper>
          <HeroContainer>
            <LinkCategory
              to={`shop?product=${homeProductLinks?.jacets[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  product: [homeProductLinks?.jacets[selectedLanguage]],
                })
              }
            >
              <CategoryItem props={`url(${photoJacetsCategory})`}>
                <CategoryTitle>{t('Jackets')}</CategoryTitle>
              </CategoryItem>
            </LinkCategory>

            <LinkCategory
              to={`shop?product=${homeProductLinks?.pants[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
            >
              <CategoryItem
                props={`url(${photoPantsCategory})`}
                onClick={() =>
                  saveToStorage('filters', {
                    ...init,
                    product: [homeProductLinks?.pants[selectedLanguage]],
                  })
                }
              >
                <CategoryTitle>{t('Pants')}</CategoryTitle>
              </CategoryItem>
            </LinkCategory>

            <LinkCategory
              to={`shop?product=${homeProductLinks?.Hoodies_Sweatshirts[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
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
                <CategoryTitle>{t('Hoodies & Sweatshirts')}</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
            <LinkCategory
              to={`shop?category=${homeProductLinks?.footwear[selectedLanguage]}&minPrice=0&maxPrice=5000&page=1&perPage=12&currency=${selectedCurrency}&sort=maxMinPrice`}
              onClick={() =>
                saveToStorage('filters', {
                  ...init,
                  category: [homeProductLinks?.footwear[selectedLanguage]],
                })
              }
            >
              <CategoryItem props={`url(${photoFootwearCategory})`}>
                <CategoryTitle>{t('Shoes')}</CategoryTitle>
              </CategoryItem>
            </LinkCategory>
          </HeroContainer>
        </SectionWrapper>
      </CategorySection>
    </>
  );
};
