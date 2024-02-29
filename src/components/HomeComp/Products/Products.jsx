import React, { useState } from 'react';
import {
  ProductsBox,
  ProductsTitle,
  ProductsBtn,
  ProductsList,
  ProductsListItem,
  ListItemDiscrTitle,
  ProductsImg,
  ProductsSection,
  ProductsListItemLink,
  ProductsArrowIcon,
  ProductsArrowIconBox,
} from './Products.styled';
import * as SC from '../../Catalog/CatalogList/CatalogList.styled';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

export const Products = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNextSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex + 1 >= products.length ? 0 : prevIndex + 1,
    );
  };

  const handlePrevSlide = () => {
    setCurrentIndex(prevIndex =>
      prevIndex - 1 < 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  const slideProducs = products.slice(currentIndex);

  return (
    <ProductsBox>
      <ProductsSection>
        <ProductsTitle>Discounts from 10 to 25%</ProductsTitle>
        <ProductsBtn to="/catalog/plants?perPage=12&page=1">
          See all
        </ProductsBtn>
        <ProductsList>
          {slideProducs.map(card => {
            return (
              <ProductsListItem key={card._id}>
                <ProductsListItemLink to={`/catalog/byid/${card._id}`}>
                  <ProductsImg
                    src={BASE_URL_IMG + card.images[0]}
                    alt={card.name}
                    width="285"
                    height="460"
                    loading="lazy"
                  />
                  <SC.CardTitle>
                    <ListItemDiscrTitle>{card.name}</ListItemDiscrTitle>
                    <SC.CardPrices>
                      {card.currentPrice && (
                        <SC.CardDiscount>
                          {card.currentPrice}
                          {card.currency}
                        </SC.CardDiscount>
                      )}
                      {card.oldPrice && (
                        <SC.CardPrice>
                          {card.oldPrice}
                          {card.currency}
                        </SC.CardPrice>
                      )}
                    </SC.CardPrices>
                  </SC.CardTitle>
                  <SC.CardSize>
                    <span>Size</span>
                    <div>
                      {card.options.map(option => {
                        return (
                          option.total != 0 && (
                            <span key={option._id}>{option.title}</span>
                          )
                        );
                      })}
                    </div>
                  </SC.CardSize>
                </ProductsListItemLink>
              </ProductsListItem>
            );
          })}
        </ProductsList>
        <ProductsArrowIconBox>
          <ProductsArrowIcon onClick={handlePrevSlide} />
          <ProductsArrowIcon onClick={handleNextSlide} />
        </ProductsArrowIconBox>
      </ProductsSection>
    </ProductsBox>
  );
};
