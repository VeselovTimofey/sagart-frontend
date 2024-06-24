import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './slice/root';

const setupStore = () => configureStore({
  reducer: {
    reducer: rootReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    // Non-serializable value was detected in an action, in the path: `payload` (Это плохое решение)
    serializableCheck: false,
  }),
});

export default setupStore;
