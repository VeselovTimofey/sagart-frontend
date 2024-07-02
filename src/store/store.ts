import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/root';

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

export default setupStore;
