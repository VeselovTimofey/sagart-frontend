import { createSlice } from '@reduxjs/toolkit';
import IProductsState from '../../utils/types/product';
import allProductsAction from '../actions/allProductsAction';
import mockProduct from '../../utils/mock/products.json';

const initialState: IProductsState = {
  products: [
    {
      id: '0',
      aricle_num: 0,
      name: '',
      descrition_id: '0',
      author_id: '1',
      make_year: 0,
      size: '',
      edition: '',
      auth_signature: false,
      preview_photo: '',
      photo_gallery: [{ photo: '' }],
      ishorizontal: false,
      genre: '',
      type: '',
      category: '',
      status: '',
      price: 0,
    },
  ],
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
