import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NotFound } from 'components/NotFound/NotFound';
import { ErrorContainer, ErrorImg } from 'components/NotFound/NotFound.styled';
import { cleanHeaderBottom } from 'redux/header_bottom/operation';
import { SEO } from 'utils/SEO';

import img_tablet_webp_1 from '../images/error/404_indoor_plants_tablet_1x.webp';
import img_tablet_webp_2 from '../images/error/404_indoor_plants_tablet_2x.webp';
import img_tablet_webp_3 from '../images/error/404_indoor_plants_tablet_3x.webp';

import img_mobile_webp_1 from '../images/error/404_indoor_plants_mobile_1x.webp';
import img_mobile_webp_2 from '../images/error/404_indoor_plants_mobile_2x.webp';
import img_mobile_webp_3 from '../images/error/404_indoor_plants_mobile_3x.webp';

import img_desktop_webp_1 from '../images/error/404_indoor_plants_desktop_1x.webp';
import img_desktop_webp_2 from '../images/error/404_indoor_plants_desktop_2x.webp';
import img_desktop_webp_3 from '../images/error/404_indoor_plants_desktop_3x.webp';

const NotFoundPage = () => {
  const dispatch = useDispatch();

  window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

  useEffect(() => {
    dispatch(cleanHeaderBottom());
  }, []);
  return (
    <ErrorContainer>
      <SEO title="HomeForest NotFoundPage" description="Not Found Page" />
      <picture style={{ height: '100%', width: '100%' }}>
        <source
          media="(min-width:1440px)"
          srcSet={`${img_desktop_webp_1} 1x, ${img_desktop_webp_2} 2x, ${img_desktop_webp_3} 3x, type="image/webp"`}
        />
        <source
          media="(min-width: 768px)"
          srcSet={`${img_tablet_webp_1} 1x, ${img_tablet_webp_2} 2x, ${img_tablet_webp_3} 3x, type="image/webp"`}
        />
        <source
          media="(max-width:767px)"
          srcSet={`${img_mobile_webp_1} 1x, ${img_mobile_webp_2} 2x, ${img_mobile_webp_3} 3x, type="image/webp"`}
        />

        <ErrorImg
          className="404_image"
          src={img_tablet_webp_1}
          srcSet={`${img_mobile_webp_1} 320w, ${img_tablet_webp_1} 768w, ${img_desktop_webp_1} 1440w`}
          sizes="(min-width:1440px) 1440px, (min-width: 768px) 768px, (max-width:767px) 320px, 100vw"
          alt="Page not found"
          width="100%"
          height="100vh"
          loading="lazy"
        />
      </picture>
      <NotFound />
    </ErrorContainer>
  );
};

export default NotFoundPage;
