import { headerBottomSlice } from './slice';
export const addHeaderBottom = b => dispatch => {
  dispatch(headerBottomSlice.actions.addHeaderBottom({ ...b }));
};
export const cleanHeaderBottom = () => dispatch => {
  dispatch(headerBottomSlice.actions.cleanHeaderBottom());
};
