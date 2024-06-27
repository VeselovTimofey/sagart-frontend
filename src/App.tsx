import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';

import Footer from './components/Footer/index';
import AuthorPage from './pages/Author';
import SuccessScreenUi from './components/AuthWidget/ui/SuccessScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* // TODO: Add data prefetching in Route component  */}
        {/* // TODO: Use param to filter request (on router side) */}
        <Route path="/catalogue/:category?" Component={CataloguePage} />
        {/* NOTE: Product page */}
        <Route path="/products/:productId" Component={ProductPage} />
        {/* NOTE: Author page */}
        <Route path="/authors/:authorId" Component={AuthorPage} />
        {/* TODO: Test page. Remove after testing */}
        <Route path="/test" Component={SuccessScreenUi} />
        <Route index element={<div>Root page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
