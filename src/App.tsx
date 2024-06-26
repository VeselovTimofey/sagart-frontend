import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CataloguePage from './pages/Catalogue';

import Footer from './components/Footer/index';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/catalogue/:category?">
            {/* // TODO: Add data prefetching in Route component  */}
            {/* // TODO: Use param to filter request (on router side) */}
            <Route index Component={CataloguePage} />
          </Route>
          {/* NOTE: Product page */}
          <Route
            path="/products/:productId"
            element={<div>Artwork page</div>}
          />
          {/* TODO: Test page. Remove after testing */}
          <Route path="/test" element={<div>Test page</div>} />
          <Route index element={<div>Root page</div>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
