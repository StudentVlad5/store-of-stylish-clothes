import React from 'react';
import { Link } from 'react-router-dom';
import { ProductsSection } from 'components/HomeComp/Products/Products.styled';

import dog_plants_mob_jpg from 'images/hero/products/dog-plants_mob.jpg';
import dog_plants_mob_2x_jpg from 'images/hero/products/dog-plants_mob@2x.jpg';
import dog_plants_mob_webp from 'images/hero/products/dog-plants_mob.webp';
import dog_plants_mob_2x_webp from 'images/hero/products/dog-plants_mob@2x.webp';
import dog_plants_desk_jpg from 'images/hero/products/dog-plants_desk.jpg';
import dog_plants_desk_2x_jpg from 'images/hero/products/dog-plants_desk@2x.jpg';
import dog_plants_desk_webp from 'images/hero/products/dog-plants_desk.webp';
import dog_plants_desk_2x_webp from 'images/hero/products/dog-plants_desk@2x.webp';

import pepper_plant_mob_jpg from 'images/hero/products/pepper-face-plant_mob.jpg';
import pepper_plant_mob_2x_jpg from 'images/hero/products/pepper-face-plant_mob@2x.jpg';
import pepper_plant_mob_webp from 'images/hero/products/pepper-face-plant_mob.webp';
import pepper_plant_mob_2x_webp from 'images/hero/products/pepper-face-plant_mob@2x.webp';
import pepper_plant_desk_jpg from 'images/hero/products/pepper-face-plant_desk.jpg';
import pepper_plant_desk_2x_jpg from 'images/hero/products/pepper-face-plant_desk@2x.jpg';
import pepper_plant_desk_webp from 'images/hero/products/pepper-face-plant_desk.webp';
import pepper_plant_desk_2x_webp from 'images/hero/products/pepper-face-plant_desk@2x.webp';

import african_plant_mob_jpg from 'images/hero/products/african-mask-plant_mob.jpg';
import african_plant_mob_2x_jpg from 'images/hero/products/african-mask-plant_mob@2x.jpg';
import african_plant_mob_webp from 'images/hero/products/african-mask-plant_mob.webp';
import african_plant_mob_2x_webp from 'images/hero/products/african-mask-plant_mob@2x.webp';
import african_plant_desk_jpg from 'images/hero/products/african-mask-plant_desk.jpg';
import african_plant_desk_2x_jpg from 'images/hero/products/african-mask-plant_desk@2x.jpg';
import african_plant_desk_webp from 'images/hero/products/african-mask-plant_desk.webp';
import african_plant_desk_2x_webp from 'images/hero/products/african-mask-plant_desk@2x.webp';

import plant_packaging_mob_jpg from 'images/hero/products/plant-packaging_mob.jpg';
import plant_packaging_mob_2x_jpg from 'images/hero/products/plant-packaging_mob@2x.jpg';
import plant_packaging_mob_webp from 'images/hero/products/plant-packaging_mob.webp';
import plant_packaging_mob_2x_webp from 'images/hero/products/plant-packaging_mob@2x.webp';
import plant_packaging_desk_jpg from 'images/hero/products/plant-packaging_desk.jpg';
import plant_packaging_desk_2x_jpg from 'images/hero/products/plant-packaging_desk@2x.jpg';
import plant_packaging_desk_webp from 'images/hero/products/plant-packaging_desk.webp';
import plant_packaging_desk_2x_webp from 'images/hero/products/plant-packaging_desk@2x.webp';

import { ImgDiscr, ImgTitle, List, ListItem } from './NewArrivals.styled';

export const NewArrivals = () => {
  const imgArr = [
    {
      dog_plants: [
        dog_plants_mob_jpg,
        dog_plants_mob_2x_jpg,
        dog_plants_mob_webp,
        dog_plants_mob_2x_webp,
        dog_plants_desk_jpg,
        dog_plants_desk_2x_jpg,
        dog_plants_desk_webp,
        dog_plants_desk_2x_webp,
      ],
    },
    {
      pepper_plant: [
        pepper_plant_mob_jpg,
        pepper_plant_mob_2x_jpg,
        pepper_plant_mob_webp,
        pepper_plant_mob_2x_webp,
        pepper_plant_desk_jpg,
        pepper_plant_desk_2x_jpg,
        pepper_plant_desk_webp,
        pepper_plant_desk_2x_webp,
      ],
    },
    {
      african_plant: [
        african_plant_mob_jpg,
        african_plant_mob_2x_jpg,
        african_plant_mob_webp,
        african_plant_mob_2x_webp,
        african_plant_desk_jpg,
        african_plant_desk_2x_jpg,
        african_plant_desk_webp,
        african_plant_desk_2x_webp,
      ],
    },
    {
      plant_packaging: [
        plant_packaging_mob_jpg,
        plant_packaging_mob_2x_jpg,
        plant_packaging_mob_webp,
        plant_packaging_mob_2x_webp,
        plant_packaging_desk_jpg,
        plant_packaging_desk_2x_jpg,
        plant_packaging_desk_webp,
        plant_packaging_desk_2x_webp,
      ],
    },
  ];

  const titleArr = [
    {
      img: ['dog_plants', 'pepper_plant', 'african_plant', 'plant_packaging'],
      name: [
        'Pet - friendly plants',
        'Hard to  kill plants',
        'Rar plants',
        'Gifts',
      ],
    },
    {
      links: [
        '/catalog?perPage=12&page=1&petFriendly=pet+friendly',
        '/catalog?page=1&perPage=12&hardToKill=easy+to+care',
        '/catalog?page=1&perPage=12&rare=rare',
        '/catalog/cards',
      ],
    },
    {
      filters: [
        { petFriendly: 'pet friendly' },
        { hardToKill: 'easy to care' },
        { rare: 'rare' },
        {},
      ],
    },
  ];
  return (
    <ProductsSection>
      <ImgTitle>New Arrivals</ImgTitle>
      <List>
        {imgArr.map((image, idx) => (
          <ListItem key={idx}>
            <Link
              style={{ textDecoration: 'none' }}
              to={titleArr[1].links[idx]}
            >
              <picture>
                <source
                  media="(min-width:1440px)"
                  srcSet={`
                  ${image[titleArr[0].img[idx]][6]} 1x, 
                  ${image[titleArr[0].img[idx]][7]} 2x`}
                  type="image/webp"
                />
                <source
                  media="(max-width:1439.98px)"
                  srcSet={`
                  ${image[titleArr[0].img[idx]][2]} 1x, 
                  ${image[titleArr[0].img[idx]][3]} 2x`}
                  type="image/webp"
                />
                <img
                  srcSet={`
                    ${image[titleArr[0].img[idx]][4]} 285w, 
                    ${image[titleArr[0].img[idx]][5]} 570w, 
                    ${image[titleArr[0].img[idx]][0]} 356w, 
                    ${image[titleArr[0].img[idx]][1]} 711w`}
                  src={image[titleArr[0].img[idx]][0]}
                  alt={titleArr[0].name[idx]}
                  sizes="(min-width:1440px) 285px, (max-width:1439.98px) 356px, 100vw"
                  width="356"
                  height="375"
                  loading="lazy"
                />
              </picture>
              <ImgDiscr>{titleArr[0].name[idx]}</ImgDiscr>
            </Link>
          </ListItem>
        ))}
        {/* <ListItem>
          <Link
            style={{ textDecoration: 'none' }}
            to="/catalog?perPage=12&page=1&petFriendly=pet+friendly"
          >
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`
                 ${dog_plants_desk_webp} 1x, 
                 ${dog_plants_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:1439.98px)"
                srcSet={`
                 ${dog_plants_mob_webp} 1x, 
                 ${dog_plants_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                srcSet={`
                   ${dog_plants_desk_jpg} 285w, 
                   ${dog_plants_desk_2x_jpg} 570w, 
                   ${dog_plants_mob_jpg} 356w, 
                   ${dog_plants_mob_2x_jpg} 711w`}
                src={dog_plants_mob_jpg}
                alt="Dog on a chair"
                sizes="(min-width:1440px) 285px, (max-width:1439.98px) 356px, 100vw"
                width="356"
                height="375"
                loading="lazy"
              />
            </picture>
            <ImgDiscr>Pet - friendly plants</ImgDiscr>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none' }}
            to="/catalog?page=1&perPage=12&hardToKill=easy+to+care"
          >
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`
                 ${pepper_plant_desk_webp} 1x, 
                 ${pepper_plant_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:1439.98px)"
                srcSet={`
                 ${pepper_plant_mob_webp} 1x, 
                 ${pepper_plant_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                srcSet={`
                   ${pepper_plant_desk_jpg} 285w, 
                   ${pepper_plant_desk_2x_jpg} 570w, 
                   ${pepper_plant_mob_jpg} 356w, 
                   ${pepper_plant_mob_2x_jpg} 711w`}
                src={pepper_plant_mob_jpg}
                alt="Plant in a pot"
                sizes="(min-width:1440px) 285px, (max-width:1439.98px) 356px, 100vw"
                width="356"
                height="375"
                loading="lazy"
              />
            </picture>
            <ImgDiscr>Hard to kill plants</ImgDiscr>
          </Link>
        </ListItem>
        <ListItem>
          <Link
            style={{ textDecoration: 'none' }}
            to="/catalog?page=1&perPage=12&rare=rare"
          >
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`
                 ${african_plant_desk_webp} 1x, 
                 ${african_plant_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:1439.98px)"
                srcSet={`
                 ${african_plant_mob_webp} 1x, 
                 ${african_plant_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                srcSet={`
                   ${african_plant_desk_jpg} 285w, 
                   ${african_plant_desk_2x_jpg} 570w, 
                   ${african_plant_mob_jpg} 356w, 
                   ${african_plant_mob_2x_jpg} 711w`}
                src={african_plant_mob_jpg}
                alt="Rare plant in a pot"
                sizes="(min-width:1440px) 285px, (max-width:1439.98px) 356px, 100vw"
                width="356"
                height="375"
                loading="lazy"
              />
            </picture>
            <ImgDiscr>Rar plants</ImgDiscr>
          </Link>
        </ListItem>
        <ListItem>
          <Link style={{ textDecoration: 'none' }} to="/catalog/cards">
            <picture>
              <source
                media="(min-width:1440px)"
                srcSet={`
                 ${plant_packaging_desk_webp} 1x, 
                 ${plant_packaging_desk_2x_webp} 2x`}
                type="image/webp"
              />
              <source
                media="(max-width:1439.98px)"
                srcSet={`
                 ${plant_packaging_mob_webp} 1x, 
                 ${plant_packaging_mob_2x_webp} 2x`}
                type="image/webp"
              />
              <img
                srcSet={`
                   ${plant_packaging_desk_jpg} 285w, 
                   ${plant_packaging_desk_2x_jpg} 570w, 
                   ${plant_packaging_mob_jpg} 356w, 
                   ${plant_packaging_mob_2x_jpg} 711w`}
                src={plant_packaging_mob_jpg}
                alt="Plant in a paper bag"
                sizes="(min-width:1440px) 285px, (max-width:1439.98px) 356px, 100vw"
                width="356"
                height="375"
                loading="lazy"
              />
            </picture>
            <ImgDiscr>Gifts</ImgDiscr>
          </Link>
        </ListItem> */}
      </List>
    </ProductsSection>
  );
};
