import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import 'typeface-inter';

import { theme } from './utils/styles/theme';

import Header from './components/Header/index';
import Footer from './components/Footer/index';

import MainPage from './pages/Root';
import CataloguePage from './pages/Catalogue';
import ProductPage from './pages/Product';
import AuthorPage from './pages/Author';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider {...{ theme }}>
        <CssBaseline />
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
          {/* TODO: Test page. Remove after testing */}
          <Route path="/test" element={<div>Test page</div>} />
          <Route index Component={MainPage} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
