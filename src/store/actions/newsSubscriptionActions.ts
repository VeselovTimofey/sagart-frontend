import { createAsyncThunk } from '@reduxjs/toolkit';
import postNewsSubscription from '../../utils/api/api';

const newsSubscriptionAction = createAsyncThunk(
  'newsSubscription/getNewsSubscription',
  async (email: string) => {
    const response = await postNewsSubscription({
      values: email,
      endPath: '/newsSubscription',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    return response;
  }
);

export default newsSubscriptionAction;
