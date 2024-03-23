import React, { useContext } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { addReload } from 'redux/reload/slice';
import { addFavorite, removeFavorite } from 'redux/auth/operations';
import { getUser, selectId, selectIsLoggedIn } from 'redux/auth/selectors';
import { onSuccess, onInfo } from 'components/helpers/Messages/NotifyMessages';
// import { BASE_URL_IMG } from 'BASE_CONST/Base-const';

import theme from 'components/baseStyles/Variables.styled';
import * as SC from './CatalogList.styled';
import { StatusContext } from 'components/ContextStatus/ContextStatus';
import {
  selectCurrency,
  selectNewPrice,
  selectOldPrice,
} from 'services/selectCurrency';

export const CatalogList = ({ products }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(getUser).favorites;
  let favorites;
  user ? (favorites = user.map(item => +item)) : (favorites = []);
  const _id = useSelector(selectId); //isLoggedIn

  const routeParams = useParams();
  const dispatch = useDispatch();

  const { selectedCurrency } = useContext(StatusContext);

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
            <NavLink to={`/shop/byid/${card.article}`}>
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                }}
              >
                <SC.CardStatus>
                  {card?.status ? card.status : 'new'}
                </SC.CardStatus>
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
                  </SC.CardTitle>
                </SC.CardDescription>
                <SC.CardInfo>
                  {card.discount_ua !== 0 ? (
                    <SC.CardPrices>
                      {card.price_ua && (
                        <SC.CardDiscount>
                          <span>Price: </span>
                          {selectNewPrice(selectedCurrency, card)}
                          {selectCurrency(selectedCurrency)}
                        </SC.CardDiscount>
                      )}
                      {card?.oldPrice_ua && (
                        <SC.CardPrice>
                          {selectOldPrice(selectedCurrency, card)}
                          {selectCurrency(selectedCurrency)}
                        </SC.CardPrice>
                      )}
                    </SC.CardPrices>
                  ) : (
                    <SC.CardPrices>
                      {card?.price_ua && (
                        <SC.CardDiscount>
                          {selectNewPrice(selectedCurrency, card)}
                          {selectCurrency(selectedCurrency)}
                        </SC.CardDiscount>
                      )}
                    </SC.CardPrices>
                  )}
                  <SC.BtnForFavorite
                    onClick={handleFavoriteBtnClick(card.article)}
                  >
                    {favorites.includes(card.article) ? (
                      <SC.IconFav size={30} fill={theme.colors.darkGreen} />
                    ) : (
                      <SC.IconFav size={30} color={theme.colors.beige} />
                    )}
                  </SC.BtnForFavorite>
                </SC.CardInfo>
              </div>
            </NavLink>
          </SC.Card>
        );
      })}
    </SC.Grid>
  );
};

CatalogList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({})),
};
