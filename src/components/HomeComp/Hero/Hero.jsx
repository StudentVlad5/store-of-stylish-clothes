import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { fetchData } from 'services/APIservice';
import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';
import { Products } from '../Products/Products';

import {
  HeroSection,
  HeroContainer,
  HeroTitle,
  HeroDiscr,
  HeroBtn,
  HeroBoxText,
  HeroBox,
} from './Hero.styled';

import hero_mob_jpg from 'images/hero/hero_mob.jpg';
import hero_mob_2x_jpg from 'images/hero/hero_mob@2x.jpg';
import hero_mob_webp from 'images/hero/hero_mob.webp';
import hero_mob_2x_webp from 'images/hero/hero_mob@2x.webp';
import hero_tab_jpg from 'images/hero/hero_tab.jpg';
import hero_tab_2x_jpg from 'images/hero/hero_tab@2x.jpg';
import hero_tab_webp from 'images/hero/hero_tab.webp';
import hero_tab_2x_webp from 'images/hero/hero_tab@2x.webp';
import hero_desk_jpg from 'images/hero/hero_desk.jpg';
import hero_desk_2x_jpg from 'images/hero/hero_desk@2x.jpg';
import hero_desk_webp from 'images/hero/hero_desk.webp';
import hero_desk_2x_webp from 'images/hero/hero_desk@2x.webp';

export const Hero = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  useEffect(() => {
    (async function getData() {
      setIsLoading(true);
      try {
        const { data } = await fetchData(`/catalog/plants`);
        setProducts(data.catalog);
        if (!data) {
          return onFetchError(t('Whoops, something went wrong'));
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [t]);

  return (
    <HeroSection>
      <HeroContainer>
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet={`${hero_desk_webp} 1x, ${hero_desk_2x_webp} 2x`}
            type="image/webp"
          />
          <source
            media="(min-width:768px)"
            srcSet={`${hero_tab_webp} 1x, ${hero_tab_2x_webp} 2x`}
            type="image/webp"
          />
          <source
            media="(max-width:767.97px)"
            srcSet={`${hero_mob_webp} 1x, ${hero_mob_2x_webp} 2x`}
            type="image/webp"
          />
          <img
            src={hero_mob_jpg}
            srcSet={`${hero_desk_jpg} 1440w, ${hero_desk_2x_jpg} 2880w, ${hero_tab_jpg} 7680w, ${hero_tab_2x_jpg} 1536w,
                  ${hero_mob_jpg} 372w, ${hero_mob_2x_jpg} 744w`}
            alt="Potted plant on a stand"
            sizes="(min-width:1440px) 1440px, (min-width:768px) 768px, (max-width:767px) 372px, 100vw"
            width="1440"
            height="800"
            // loading="lazy"
          />
        </picture>

        <HeroBox>
          <HeroBoxText>
            <HeroTitle>Indoor Plants</HeroTitle>
            <HeroDiscr>bring the beauty of nature into your home</HeroDiscr>
            <Link to={'/catalog?perPage=12&page=1'}>
              <HeroBtn type="button">Shop now</HeroBtn>
            </Link>
          </HeroBoxText>
        </HeroBox>
      </HeroContainer>

      {isLoading ? onLoading() : onLoaded()}
      {error && onFetchError(t('Whoops, something went wrong'))}
      {products.length > 0 && !error && <Products products={products} />}
    </HeroSection>
  );
};
