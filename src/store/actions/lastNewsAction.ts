import { createAsyncThunk } from '@reduxjs/toolkit';

import { getLastNews } from '../../utils/api/api';
import { INews } from '../../utils/types/lastNewsState';

const lastNewsAction = createAsyncThunk<INews[], void, { rejectValue: string }>(
  'lastNews/getLastNews',
  async (_, { rejectWithValue }) => {
    try {
      const response = await getLastNews();
      if (!response.ok) {
        throw new Error('Не удалось получить последние новости.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
    }
    return null;
  }
);

export default lastNewsAction;
