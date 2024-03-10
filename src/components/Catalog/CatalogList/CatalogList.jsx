import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addReload } from 'redux/reload/slice';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { getUser, selectId, selectIsLoggedIn } from 'redux/auth/selectors';
import { onSuccess, onInfo } from 'components/helpers/Messages/NotifyMessages';
import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

import theme from 'components/baseStyles/Variables.styled';
import * as SC from './CatalogList.styled';

export const CatalogList = ({ products }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(getUser).favorites;
  let favorites;
  user ? (favorites = user.map(item => +item)) : (favorites = []);
  const _id = useSelector(selectId); //isLoggedIn

  const routeParams = useParams();
  const dispatch = useDispatch();

  const toggleFavorite = async id => {
    let isInFavorite = false;
    favorites
      ? (isInFavorite = favorites.includes(id))
      : (isInFavorite = false);
    if (isInFavorite) {
      dispatch(removeFavorite(id));
      onSuccess('You remove plant from the favorite!');
      return;
    }
    dispatch(addFavorite(id));
    onSuccess('You add plant to the favorite!');
  };

  const handleFavoriteBtnClick = id => e => {
    e.preventDefault();
    e.stopPropagation();
    if (routeParams.id === 'favorite') {
      dispatch(addReload(true));
    }
    !isLoggedIn ? onInfo('You must be loggined!') : toggleFavorite(id);
  };

  return (
    <SC.Grid>
      {products.map(card => {
        return (
          <SC.Card key={card.uuid}>
            <SC.BtnForFavorite onClick={handleFavoriteBtnClick(card.uuid)}>
              {favorites.includes(card.uuid) ? (
                <SC.IconFav size={30} fill={theme.colors.darkGreen} />
              ) : (
                <SC.IconFav size={30} color={theme.colors.beige} />
              )}
            </SC.BtnForFavorite>
            <NavLink to={`/catalog/byid/${card.uuid}`}>
              <SC.CardImage
                src={card.mainImage}
                alt={card.title}
                width="285"
                height="460"
                loading="lazy"
              />
              <SC.CardDescription>
                <SC.CardTitle>
                  <SC.CardName>{card.title}</SC.CardName>
                  {card.discount !== 0 ? (
                    <SC.CardPrices>
                      {card.price && (
                        <SC.CardDiscount>
                          {card.price}
                          {card?.currency ? card?.currency : '₴'}
                        </SC.CardDiscount>
                      )}
                      {card?.oldPrice && (
                        <SC.CardPrice>
                          {card.oldPrice}
                          {card.currency}
                        </SC.CardPrice>
                      )}
                    </SC.CardPrices>
                  ) : (
                    <SC.CardPrices>
                      {card?.currentPrice && (
                        <SC.CardDiscount>
                          {card.currentPrice}
                          {card.currency}
                        </SC.CardDiscount>
                      )}
                    </SC.CardPrices>
                  )}
                </SC.CardTitle>
                <SC.CardSize>
                  <span>Size</span>
                  <div>
                    {/* {card.options.map(option => {
                      return (
                        option.total != 0 && (
                          <span key={option._id}>{option.title}</span>
                        )
                      );
                    })} */}
                  </div>
                </SC.CardSize>
              </SC.CardDescription>
            </NavLink>
          </SC.Card>
        );
      })}
    </SC.Grid>
  );
};

CatalogList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      oldPrice: PropTypes.number.isRequired,
      currentPrice: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string,
          oldPrice: PropTypes.number,
          currentPrice: PropTypes.number,
          total: PropTypes.number,
        }),
      ),
      totalQuantity: PropTypes.number,
      typeOfPlants: PropTypes.string,
      light: PropTypes.string,
      petFriendly: PropTypes.string,
      maintenance: PropTypes.string,
      potSize: PropTypes.shape({
        size: PropTypes.number,
        unit: PropTypes.string,
        _id: PropTypes.string,
      }),
      hardToKill: PropTypes.string,
      rare: PropTypes.string,
      waterSchedule: PropTypes.string,
      images: PropTypes.array,
      category: PropTypes.string,
    }),
  ),
};
