import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { CssBaseline, ThemeProvider } from '@mui/material';

import 'typeface-inter';

import { theme } from './utils/styles/theme';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import MainPage from './pages/Root';
import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';
import AuthorPage from './pages/Author';
import { AppDispatch } from './utils/types/appDispatch';
import allProductsAction from './store/actions/allProductsAction';
import { PREFIXPATH } from './utils/constant/routes';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(allProductsAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider {...{ theme }}>
        <CssBaseline />
        <Header />
        <Routes>
          {/* // TODO: Add data prefetching in Route component  */}
          {/* // TODO: Use param to filter request (on router side) */}
          <Route
            path={`${PREFIXPATH}/catalogue/:category?`}
            Component={CataloguePage}
          />
          {/* NOTE: Product page */}
          <Route
            path={`${PREFIXPATH}/products/:productId`}
            Component={ProductPage}
          />
          {/* NOTE: Author page */}
          <Route
            path={`${PREFIXPATH}/authors/:authorId`}
            Component={AuthorPage}
          />
          <Route index path={PREFIXPATH} Component={MainPage} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
