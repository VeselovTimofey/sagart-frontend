import { combineReducers } from '@reduxjs/toolkit';
import newsSubscriptionSlice from './newsSubscriptionSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
});

export default rootReducer;
