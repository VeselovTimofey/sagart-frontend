import { combineReducers } from '@reduxjs/toolkit';

import newsSubscriptionSlice from './newsSubscriptionSlice';
import lastNewsSlice from './lastNewsSlice';

const rootReducer = combineReducers({
  newsSubscription: newsSubscriptionSlice,
  lastNews: lastNewsSlice,
});

export default rootReducer;
