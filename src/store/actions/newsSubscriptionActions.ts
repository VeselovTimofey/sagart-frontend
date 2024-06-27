import { createAsyncThunk } from '@reduxjs/toolkit';
import { postNewsSubscription } from '../../utils/api/api';

const newsSubscriptionAction = createAsyncThunk(
  'newsSubscription/getNewsSubscription',
  postNewsSubscription
);

export default newsSubscriptionAction;
