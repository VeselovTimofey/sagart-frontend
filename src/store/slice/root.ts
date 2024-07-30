import { combineReducers } from '@reduxjs/toolkit';

import newsSubscriptionSlice from './newsSubscriptionSlice';
import authSlice from './authSlice';
import lastNewsSlice from './lastNewsSlice';
import productsSlice from './productsSlice';
import authorSlice from './authorSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
  lastNews: lastNewsSlice,
  authSlice,
  products: productsSlice,
  authors: authorSlice,
});

export default rootReducer;
