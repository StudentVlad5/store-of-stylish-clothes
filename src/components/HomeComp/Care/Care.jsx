import React from 'react';
import { CareBox } from './Care.styled';
import {
  HealthBoxDiscr,
  HealthDiscr,
  BoxText,
  HealthHeadTitle,
  HealthTitle,
  ImgBox,
  ReadMore,
} from '../Health/Health.styled';
import { ProductsSection } from '../Products/Products.styled';

import cultivating_plants_mob_jpg from 'images/hero/products/cultivating-plants_mob.jpg';
import cultivating_plants_mob_2x_jpg from 'images/hero/products/cultivating-plants_mob@2x.jpg';
import cultivating_plants_mob_webp from 'images/hero/products/cultivating-plants_mob.webp';
import cultivating_plants_mob_2x_webp from 'images/hero/products/cultivating-plants_mob@2x.webp';
import cultivating_plants_desk_jpg from 'images/hero/products/cultivating-plants_desk.jpg';
import cultivating_plants_desk_2x_jpg from 'images/hero/products/cultivating-plants_desk@2x.jpg';
import cultivating_plants_desk_webp from 'images/hero/products/cultivating-plants_desk.webp';
import cultivating_plants_desk_2x_webp from 'images/hero/products/cultivating-plants_desk@2x.webp';

export const Care = () => {
  return (
    <ProductsSection>
      <CareBox>
        <HealthBoxDiscr>
          <HealthHeadTitle>Care and treatment</HealthHeadTitle>
          <BoxText>
            <HealthTitle>Spring care for indoor plants</HealthTitle>
            <HealthDiscr>
              Spring is an important time for indoor plants as it marks the
              beginning of their active growth period. It is also the right time
              to repot your plants. Here are some tips on how and when to do it
              best.
            </HealthDiscr>
            <ReadMore to={'/addition/blogs'}>Read more</ReadMore>
          </BoxText>
        </HealthBoxDiscr>
        <picture>
          <source
            media="(min-width:1440px)"
            srcSet={`${cultivating_plants_desk_webp} 1x, ${cultivating_plants_desk_2x_webp}  2x`}
            type="image/webp"
          />
          <source
            media="(max-width:1439.98px)"
            srcSet={`${cultivating_plants_mob_webp} 1x, ${cultivating_plants_mob_2x_webp}  2x`}
            type="image/webp"
          />
          <ImgBox
            srcSet={`${cultivating_plants_desk_jpg} 590w, ${cultivating_plants_desk_2x_jpg} 1180w, ${cultivating_plants_mob_jpg} 356w, ${cultivating_plants_mob_2x_jpg} 711w`}
            src={cultivating_plants_mob_jpg}
            alt="Wipes leaves with hands"
            sizes="(min-width:1440px) 590px, (max-width:1439.98px) 356px, 100vw"
            width="356"
            height="223"
            loading="lazy"
          />
        </picture>
      </CareBox>
    </ProductsSection>
  );
};
