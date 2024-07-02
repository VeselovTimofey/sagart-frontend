import { createAsyncThunk } from '@reduxjs/toolkit';
import { postNewsSubscription } from '../../utils/api/api';

const newsSubscriptionAction = createAsyncThunk<
  { id: string; email: string },
  string,
  { rejectValue: string }
>(
  'newsSubscription/getNewsSubscription',
  async (email, { rejectWithValue }) => {
    try {
      const response = await postNewsSubscription(email);
      if (!response.ok) {
        throw new Error('Не удалось подписаться на рассылку новостей.');
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue('Не удалось подписаться на рассылку новостей.');
    }
  }
);

export default newsSubscriptionAction;
