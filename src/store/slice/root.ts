import { combineReducers } from '@reduxjs/toolkit';

import newsSubscriptionSlice from './newsSubscriptionSlice';
import lastNewsSlice from './lastNewsSlice';
import productsSlice from './productsSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
  lastNews: lastNewsSlice,
  products: productsSlice,
});

export default rootReducer;
