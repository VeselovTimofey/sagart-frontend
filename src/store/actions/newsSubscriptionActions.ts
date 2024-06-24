import { createAsyncThunk } from '@reduxjs/toolkit';
import postNewsSubscription from '../../utils/api/api';

const newsSubscriptionAction = createAsyncThunk(
  'newsSubscription/getNewsSubscription',
  async (email: string) => {
    const response = await postNewsSubscription(email);
    return response;
  }
);

export default newsSubscriptionAction;
