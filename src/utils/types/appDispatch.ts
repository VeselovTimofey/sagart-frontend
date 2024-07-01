import setupStore from '../../store/store';
import rootReducer from '../../store/slice/root';

type App = ReturnType<typeof setupStore>;
type AppDispatch = App['dispatch'];

type AppStore = ReturnType<typeof rootReducer>;

export type { AppStore, AppDispatch };
