import { createAsyncThunk } from '@reduxjs/toolkit';

import { IProduct } from '../../utils/types';
import { getAllProducts } from '../../utils/api/api';

const allProductsAction = createAsyncThunk<
  IProduct[],
  void,
  { rejectValue: string }
>('products/getAllProducts', async (_, { rejectWithValue }) => {
  try {
    const response = await getAllProducts();
    if (!response.ok) {
      throw new Error('Не удалось получить информацию о картинах.');
    }
    const data = await response.json();
    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return rejectWithValue(error.message);
    }
  }
  return null;
});

export default allProductsAction;
