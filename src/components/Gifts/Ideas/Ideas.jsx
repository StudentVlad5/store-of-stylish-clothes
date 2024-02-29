import React from 'react';
import { saveToStorage } from 'services/localStorService';
import { GiftsSection } from '../Gifts.styled';
import * as SC from './Ideas.styled';

import img1_png from 'images/gifts/img1.png';
import img1_png_2x from 'images/gifts/img1@2x.png';
import img1_webp from 'images/gifts/img1.webp';
import img1_webp_2x from 'images/gifts/img1@2x.webp';
import img2_png from 'images/gifts/img2.png';
import img2_png_2x from 'images/gifts/img2@2x.png';
import img2_webp from 'images/gifts/img2.webp';
import img2_webp_2x from 'images/gifts/img2@2x.webp';
import img3_png from 'images/gifts/img3.png';
import img3_png_2x from 'images/gifts/img3@2x.png';
import img3_webp from 'images/gifts/img3.webp';
import img3_webp_2x from 'images/gifts/img3@2x.webp';
import img4_png from 'images/gifts/img4.png';
import img4_png_2x from 'images/gifts/img4@2x.png';
import img4_webp from 'images/gifts/img4.webp';
import img4_webp_2x from 'images/gifts/img4@2x.webp';

export const Ideas = () => {
  return (
    <GiftsSection>
      <SC.HeadlineIdeas>Our ideas for gifts</SC.HeadlineIdeas>
      <SC.IdeasList>
        <SC.IdeasItem>
          <picture>
            <source
              srcSet={`${img1_webp} 1x, ${img1_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={img1_png}
              srcSet={`${img1_png} 285w, ${img1_png_2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>
          <SC.Link
            to={`/catalog/plants?page=1&perPage=12&rare=rare`}
            onClick={() => {
              saveToStorage('rare', 'rare');
            }}
          >
            Unique plant Gifts
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <picture>
            <source
              srcSet={`${img2_webp} 1x, ${img2_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={img2_png}
              srcSet={`${img2_png} 285w, ${img2_png_2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>
          <SC.Link
            to={`/catalog/plants?page=1&perPage=12&light=low+to+bright+indirect+light`}
            onClick={() => {
              saveToStorage('light', 'low to bright indirect light');
            }}
          >
            Winter blooms
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <picture>
            <source
              srcSet={`${img3_webp} 1x, ${img3_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={img3_png}
              srcSet={`${img3_png} 285w, ${img3_png_2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>
          <SC.Link
            to={`/catalog/plants?page=1&perPage=12&petFriendly=pet+friendly`}
            onClick={() => {
              saveToStorage('petFriendly', 'pet friendly');
            }}
          >
            Pet friendly
          </SC.Link>
        </SC.IdeasItem>
        <SC.IdeasItem>
          <picture>
            <source
              srcSet={`${img4_webp} 1x, ${img4_webp_2x} 2x`}
              type="image/webp"
            />
            <img
              src={img4_png}
              srcSet={`${img4_png} 285w, ${img4_png_2x} 570w`}
              width={285}
              height={400}
              alt="Plants"
              loading="lazy"
            />
          </picture>
          <SC.Link
            to={`/catalog/plants?page=1&perPage=12&hardToKill=easy+to+care`}
            onClick={() => {
              saveToStorage('hardToKill', 'easy to care');
            }}
          >
            Best for beginners
          </SC.Link>
        </SC.IdeasItem>
      </SC.IdeasList>
    </GiftsSection>
  );
};
