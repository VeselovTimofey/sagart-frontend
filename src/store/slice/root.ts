import { combineReducers } from '@reduxjs/toolkit';

import newsSubscriptionSlice from './newsSubscriptionSlice';
import authSlice from './authSlice';
import lastNewsSlice from './lastNewsSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
  lastNews: lastNewsSlice,
  authSlice,
});

export default rootReducer;
