import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import MainPage from './pages/Root';
import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';
import AuthorPage from './pages/Author';
import { AuthWidget } from './components/AuthWidget';
import { AppDispatch } from './utils/types/appDispatch';
import allProductsAction from './store/actions/allProductsAction';

function App() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(allProductsAction());
  }, [dispatch]);

  return (
    <BrowserRouter>
      {/* // TODO: Create layout with Header and Footer */}
      <Header />
      <Routes>
        {/* // TODO: Add data prefetching in Route component  */}
        {/* // TODO: Use param to filter request (on router side) */}
        <Route path="/catalogue/:category?" Component={CataloguePage} />
        {/* NOTE: Product page */}
        <Route path="/products/:productId" Component={ProductPage} />
        {/* NOTE: Author page */}
        <Route path="/authors/:authorId" Component={AuthorPage} />
        {/* NOTE: Auth page */}
        {/* TODO: Temporary page. Later to update to popup */}
        <Route path="/auth" Component={AuthWidget} />
        {/* TODO: Test page. Remove after testing */}
        <Route path="/test" element={<div>Test page</div>} />
        <Route index Component={MainPage} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
