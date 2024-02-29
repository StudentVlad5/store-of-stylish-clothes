import React from 'react';
import * as SC from './Benefits.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';

import img1_png from 'images/catalog/img1.png';
import img1_2x_png from 'images/catalog/img1@2x.png';
import img1_webp from 'images/catalog/img1.webp';
import img1_2x_webp from 'images/catalog/img1@2x.webp';
import img2_png from 'images/catalog/img2.png';
import img2_2x_png from 'images/catalog/img2@2x.png';
import img2_webp from 'images/catalog/img2.webp';
import img2_2x_webp from 'images/catalog/img2@2x.webp';
import img3_png from 'images/catalog/img3.png';
import img3_2x_png from 'images/catalog/img3@2x.png';
import img3_webp from 'images/catalog/img3.webp';
import img3_2x_webp from 'images/catalog/img3@2x.webp';

export const Benefits = () => {
  return (
    <SC.BenefitsSection>
      <Headline>Why buy from us</Headline>
      <SC.BenefitsList>
        <SC.BenefitsItem>
          <picture>
            <source
              srcSet={`${img1_webp} 1x, ${img1_2x_webp} 2x`}
              type="image/webp"
            />
            <img
              src={img1_png}
              alt="Girl with flower"
              srcSet={`${img1_png} 159w, ${img1_2x_png} 318w`}
              width="159"
              height="159"
              loading="lazy"
            />
          </picture>
          <SC.BenefitsSubtitle>Fast shipping</SC.BenefitsSubtitle>
          <SC.BenefitsDescription>
            We offer fast and reliable delivery straight to your doorstep.
          </SC.BenefitsDescription>
        </SC.BenefitsItem>
        <SC.BenefitsItem>
          <picture>
            <source
              srcSet={`${img2_webp} 1x, ${img2_2x_webp} 2x`}
              type="image/webp"
            />
            <img
              src={img2_png}
              alt="Girl with flower"
              srcSet={`${img2_png} 159w, ${img2_2x_png} 318w`}
              width="159"
              height="159"
              loading="lazy"
            />
          </picture>
          <SC.BenefitsSubtitle>Quality guaranteed</SC.BenefitsSubtitle>
          <SC.BenefitsDescription>
            We offer a quality guarantee on all of our plants.
          </SC.BenefitsDescription>
        </SC.BenefitsItem>
        <SC.BenefitsItem>
          <picture>
            <source
              srcSet={`${img3_webp} 1x, ${img3_2x_webp} 2x`}
              type="image/webp"
            />
            <img
              src={img3_png}
              alt="Girl with flower"
              srcSet={`${img3_png} 159w, ${img3_2x_png} 318w`}
              width="159"
              height="159"
              loading="lazy"
            />
          </picture>
          <SC.BenefitsSubtitle>Support from specialists</SC.BenefitsSubtitle>
          <SC.BenefitsDescription>
            Our services include assistance and guidance in growing indoor
            plants.
          </SC.BenefitsDescription>
        </SC.BenefitsItem>
      </SC.BenefitsList>
    </SC.BenefitsSection>
  );
};
