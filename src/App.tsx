import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <BrowserRouter>
      {/* // TODO: Create layout with Header and Footer */}
      <Header />
      <Routes>
        <Route path="/catalogue/:category?">
          {/* // TODO: Add data prefetching in Route component  */}
          {/* // TODO: Use param to filter request (on router side) */}
          <Route index Component={CataloguePage} />
        </Route>
        {/* NOTE: Product page */}
        <Route path="/products/:productId" Component={ProductPage} />
        {/* TODO: Test page. Remove after testing */}
        <Route path="/test" element={<div>Test page</div>} />
        <Route index element={<div>Root page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
