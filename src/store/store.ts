import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/root';

const setupStore = () => configureStore({
  reducer: {
    reducer: rootReducer,
  },
});

export default setupStore;
