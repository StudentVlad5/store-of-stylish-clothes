import { createSlice } from '@reduxjs/toolkit';

const state = { headerBottom: null };

export const headerBottomSlice = createSlice({
  name: 'headerBottom',
  initialState: state,
  reducers: {
    addHeaderBottom: (state, { payload }) => ({
      ...state,
      ...payload,
    }),
    cleanHeaderBottom: () => state,
  },
});
export const { setheaderBottom } = headerBottomSlice.actions;
export const headerBottomReducer = headerBottomSlice.reducer;
