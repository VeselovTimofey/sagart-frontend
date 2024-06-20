import { combineReducers } from '@reduxjs/toolkit';
import subscribeSlice from './subscribeSlice';

const rootReducer = combineReducers({
  subscribe: subscribeSlice,
});

export default rootReducer;
