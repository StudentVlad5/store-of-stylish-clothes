import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import photoManCategory from 'images/hero/man_2x.webp';
import photoWomanCategory from 'images/hero/woman_2x.webp';

// import { fetchData } from 'services/APIservice';
// import { onFetchError } from 'components/helpers/Messages/NotifyMessages';
// import { onLoaded, onLoading } from 'components/helpers/Loader/Loader';

import { HeroSection, HeroContainer, HeroItem, ImgItem } from './Hero.styled';

export const Hero = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [searchParams] = useSearchParams();
  const { t } = useTranslation();

  // useEffect(() => {
  //   (async function getData() {
  //     setIsLoading(true);
  //     try {
  //       const { data } = await fetchData(`/catalog/plants`);
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
    <HeroSection>
      <HeroContainer>
        <Link to={'/catalog/men'}>
          <HeroItem>
            <ImgItem src={photoManCategory} />
            <p>MEN</p>
          </HeroItem>
        </Link>
        <Link to={'/catalog/women'}>
          <HeroItem>
            <ImgItem src={photoWomanCategory} />
            <p>WOMEN</p>
          </HeroItem>
        </Link>
      </HeroContainer>

      {/* {isLoading ? onLoading() : onLoaded()} */}
    </HeroSection>
  );
};
