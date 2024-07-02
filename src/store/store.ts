import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/root';

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // TODO: Non-serializable value was detected in an action, in the path: `payload` (This is a bad decision)
        serializableCheck: false,
      }),
  });

export default setupStore;
