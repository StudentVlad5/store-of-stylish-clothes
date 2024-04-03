import React from 'react';

import {
  GiftsHeadline,
  GiftsSection,
  GiftsSubtitle,
  LinkBtn,
  GiftsInnerContainer,
  Description,
} from '../Gifts.styled';
import * as SC from './Corporate.styled';

import corp_png from 'images/gifts/corp.png';
import corp_png_2x from 'images/gifts/corp@2x.png';
import corp_webp from 'images/gifts/corp.webp';
import corp_webp_2x from 'images/gifts/corp@2x.webp';
import { useTranslation } from 'react-i18next';
import { BtnLight } from 'components/UserComp/UserData/UserData.styled';

export const Corporate = () => {
  const { t } = useTranslation();

  return (
    <GiftsSection>
      <GiftsInnerContainer>
        <SC.InnerLeft>
          {/* <picture> */}
            {/* <source
              srcSet={`${corp_webp} 1x, ${corp_webp_2x} 2x`}
              type="image/webp"
            /> */}
            <img
              src={corp_png}
              // srcSet={`${corp_png} 590w, ${corp_png_2x} 1180w`}
              width={590}
              height={370}
              alt="Woman and man holding potted plants"
              loading="lazy"
            />
          {/* </picture> */}
        </SC.InnerLeft>
        <SC.InnerRight>
          <GiftsSubtitle>{t('great way to show appreciation')}</GiftsSubtitle>
          <GiftsHeadline>{t('Corporate Gifting')}</GiftsHeadline>
          <Description>
            {t(
              "Welcome new hires, thank clients, or recognize your team's efforts with our versatile gift card. Spread joy and appreciation effortlessly!",
            )}
          </Description>
          <BtnLight to={`/shop/cards`}>{t("Shop gift card")}</BtnLight>
        </SC.InnerRight>
      </GiftsInnerContainer>
    </GiftsSection>
  );
};
