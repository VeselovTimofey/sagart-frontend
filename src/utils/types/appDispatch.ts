import setupStore from '../../store/store';
import rootReducer from '../../store/slice/root';

type App = ReturnType<typeof setupStore>;
type AppDispatch = App['dispatch'];

type AppRoot = ReturnType<typeof rootReducer>;
type AppStore = { reducer: AppRoot };

export type { AppStore, AppDispatch };
