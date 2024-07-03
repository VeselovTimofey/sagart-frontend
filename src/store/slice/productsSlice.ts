import { createSlice } from '@reduxjs/toolkit';
import IProductsState from '../../utils/types/product';
import allProductsAction from '../actions/allProductsAction';
import mockProduct from '../../utils/mock/products.json';

const initialState: IProductsState = {
  products: [],
  isLoading: false,
  error: '',
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allProductsAction.pending, (state: IProductsState) => {
        const newState = {
          ...state,
          isLoading: true,
        };
        return newState;
      })
      .addCase(allProductsAction.fulfilled, (state: IProductsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          products: action.payload,
        };
        return newState;
      })
      .addCase(allProductsAction.rejected, (state: IProductsState, action) => {
        const newState = {
          ...state,
          isLoading: false,
          error: action.error.message,
        };
        if (action.error.message === 'Rejected') {
          newState.products = mockProduct;
        }
        return newState;
      });
  },
});

export default productsSlice.reducer;
