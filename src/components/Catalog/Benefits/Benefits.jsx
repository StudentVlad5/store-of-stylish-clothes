import React from 'react';
import * as SC from './Benefits.styled';
import { Headline } from 'components/baseStyles/CommonStyle.styled';
import img1_2x_webp from 'images/catalog/img1@2x.webp';
import img2_2x_webp from 'images/catalog/img2@2x.webp';
import { useTranslation } from 'react-i18next';
import { LazyLoadComponent } from 'react-lazy-load-image-component';

export const Benefits = () => {
  const { t } = useTranslation();

  return (
    <LazyLoadComponent id="benefits">
      <SC.BenefitsSection>
        <Headline>{t('Why buy from us?')}</Headline>
        <SC.BenefitsList>
          <SC.BenefitsItem>
            <img
              src={img2_2x_webp}
              alt="Girl with flower"
              width="159"
              height="159"
              loading="lazy"
            />
            <SC.BenefitsSubtitle>{t('Fast Shipping')}</SC.BenefitsSubtitle>
            <SC.BenefitsDescription>
              {t(
                'We offer fast and reliable delivery straight to your doorstep.',
              )}
            </SC.BenefitsDescription>
          </SC.BenefitsItem>
          <SC.BenefitsItem>
            <img
              src={img1_2x_webp}
              alt="Girl with flower"
              width="159"
              height="159"
              loading="lazy"
            />
            <SC.BenefitsSubtitle>{t('Quality guaranteed')}</SC.BenefitsSubtitle>
            <SC.BenefitsDescription>
              {t('We offer a quality guarantee on all of our products.')}
            </SC.BenefitsDescription>
          </SC.BenefitsItem>
        </SC.BenefitsList>
      </SC.BenefitsSection>
    </LazyLoadComponent>
  );
};
