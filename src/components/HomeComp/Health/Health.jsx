import React from 'react';
import { ProductsSection } from '../Products/Products.styled';
import {
  BoxText,
  HealthBox,
  HealthBoxDiscr,
  HealthDiscr,
  HealthHeadTitle,
  HealthTitle,
  ImgBox,
  ReadMore,
} from './Health.styled';

import young_woman_mob_jpg from 'images/hero/products/young-woman_mob.jpg';
import young_woman_mob_2x_jpg from 'images/hero/products/young-woman_mob@2x.jpg';
import young_woman_mob_webp from 'images/hero/products/young-woman_mob.webp';
import young_woman_mob_2x_webp from 'images/hero/products/young-woman_mob@2x.webp';
import young_woman_desk_jpg from 'images/hero/products/young-woman_desk.jpg';
import young_woman_desk_2x_jpg from 'images/hero/products/young-woman_desk@2x.jpg';
import young_woman_desk_webp from 'images/hero/products/young-woman_desk.webp';
import young_woman_desk_2x_webp from 'images/hero/products/young-woman_desk@2x.webp';

export const Health = () => {
  return (
    <>
      <ProductsSection>
        <HealthBox>
          <HealthBoxDiscr>
            <HealthHeadTitle>health as part of a lifestyle</HealthHeadTitle>
            <BoxText>
              <HealthTitle>How plants make us happy</HealthTitle>
              <HealthDiscr>
                Here are some of the health benefits of indoor plants. For
                example indoor plants have can help reduce stress and anxiety.
                Studies have shown that just looking at plants can lower blood
                pressure and heart rate.
              </HealthDiscr>
            </BoxText>
            <ReadMore to={'/addition/blogs'}>Read more</ReadMore>
          </HealthBoxDiscr>
          <picture>
            <source
              media="(min-width:1440px)"
              srcSet={`${young_woman_desk_webp} 1x, ${young_woman_desk_2x_webp}  2x`}
              type="image/webp"
            />
            <source
              media="(max-width:1439.98px)"
              srcSet={`${young_woman_mob_webp} 1x, ${young_woman_mob_2x_webp}  2x`}
              type="image/webp"
            />
            <ImgBox
              srcSet={`${young_woman_desk_jpg} 590w, ${young_woman_desk_2x_jpg} 1180w, ${young_woman_mob_jpg} 356w, ${young_woman_mob_2x_jpg} 711w`}
              src={young_woman_mob_jpg}
              alt="Woman with plants"
              sizes="(min-width:1440px) 590px, (max-width:1439.98px) 356px, 100vw"
              width="356"
              height="223"
              loading="lazy"
            />
          </picture>
        </HealthBox>
      </ProductsSection>
    </>
  );
};
