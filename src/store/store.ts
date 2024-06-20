import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/root';

function setupStore() {
  return configureStore({
    reducer: {
      reducer: rootReducer,
    },
  });
}

export default setupStore;
