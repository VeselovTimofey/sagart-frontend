import { combineReducers } from '@reduxjs/toolkit';
import newsSubscriptionSlice from './newsSubscriptionSlice';
import authSlice from './authSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
  authSlice,
});

export default rootReducer;
