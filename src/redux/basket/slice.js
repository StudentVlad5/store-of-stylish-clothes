import { createSlice } from '@reduxjs/toolkit';
import { addToBasket, removeProduct, clearBasket } from './operations';

// const initialState = {
//   basketItems: [],
//   totalAmount: 0,
//   totalDiscount: 0,
//   totalPayment: 0,
//   currency: '$',
// };
const initialState = {};
// const initialState = saveBasket();

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    // setQuantity: (state, action) => {
    // const { _id, optionData, quantity, currency } = action.payload;
    // const item = state.basketItems.find(item => item._id === _id);
    // const item = state.basketItems.find(
    //   (item) => item.optionData._id === optionData._id
    // );
    // if (item) {
    //   // item.quantity = quantity;
    //   item.optionData.quantity = quantity;
    //   item.currency = currency;
    //   functionTotalAmount(state);
    //   functionDiscountAmount(state);
    //   functionPaymentAmount(state);
    // }
    // localStorage.setItem("basketData", JSON.stringify(state));
    //   },
    // },
    // extraReducers: (builder) => {
    //   builder
    //     .addCase(
    addToBasket: (state, { payload }) => ({ ...state, ...payload }),
    //, quantity: quantity
    // const { optionData, quantity, currency } = action.payload;
    // const { _id, size } = action.payload;
    // state.basketItems.map((item) => {
    //   if (
    //     item.optionData._id === optionData._id &&
    //     item.optionData.title === optionData.title
    //   ) {
    //     item.optionData.quantity += optionData.quantity;
    //   }
    // });
    // const existingItem = state.basketItems.find(
    //   (item) =>
    //     item.optionData._id === optionData._id &&
    //     item.optionData.title === optionData.title
    // );
    // if (!existingItem) {
    // existingItem.optionData.quantity = quantity;
    // existingItem.optionData.quantity += optionData.quantity;
    // existingItem.quantity += 1;
    // }

    // functionTotalAmount(state);
    // functionDiscountAmount(state);
    // functionPaymentAmount(state);
    // localStorage.setItem("basketData", JSON.stringify(state));
    // })
    // .addCase(
    //   removeProduct (state, action) => {
    //   const { _id, size } = action.payload;
    //   const deleteBasket = state.basketItems.filter(
    //     (item) => item._id !== _id || item.optionData.title !== size
    //   );
    //   state.basketItems = deleteBasket;
    //   // state.basketItems.quantity = 1;
    //   functionTotalAmount(state);
    //   functionDiscountAmount(state);
    //   functionPaymentAmount(state);
    //   localStorage.setItem("basketData", JSON.stringify(state));
    // })
    // .addCase(
    clearBasket: () => {
      return initialState;
    },
  },
});
//   },
// });

// const functionTotalAmount = (state) => {
//   state.totalAmount = state.basketItems.reduce((total, item) => {
//     return total + item.optionData.quantity * item.optionData.oldPrice;
//   }, 0);
// };

// const functionDiscountAmount = (state) => {
//   state.totalDiscount = state.basketItems.reduce((discount, item) => {
//     return (
//       discount +
//       item.optionData.quantity * item.optionData.oldPrice -
//       item.optionData.quantity * item.optionData.currentPrice
//     );
//   }, 0);
// };

// const functionPaymentAmount = (state) => {
//   state.totalPayment = state.basketItems.reduce((payment, item) => {
//     return payment + item.optionData.currentPrice * item.optionData.quantity;
//   }, 0);
// };

export const { setBasket } = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
