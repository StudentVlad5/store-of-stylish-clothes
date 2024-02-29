import { basketSlice } from './slice';

// export const addToBasket = createAction('basket/addToBasket');
// export const clearBasket = createAction('basket/clearBasket');
// export const removeProduct = createAction('basket/removeProduct');

export const addToBasket = b => dispatch => {
  dispatch(basketSlice.actions.addToBasket({ ...b }));
};
export const clearBasket = () => dispatch => {
  dispatch(basketSlice.actions.clearBasket());
};
