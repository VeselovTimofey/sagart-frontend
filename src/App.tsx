import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';

import Header from './components/Header/index';
import Footer from './components/Footer/index';
import AuthorPage from './pages/Author';
import SuccessScreenUi from './components/AuthWidget/ui/SuccessScreen';
import AuthWidget from './components/AuthWidget';

function App() {
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
        <Route path="/test" Component={SuccessScreenUi} />
        <Route index element={<div>Root page</div>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
