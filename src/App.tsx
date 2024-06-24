import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CataloguePage from './pages/Catalogue';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/catalogue/:category?">
          <Route index Component={CataloguePage} />
        </Route>
        {/* NOTE: Product page */}
        <Route path="/products/:productId" element={<div>Artwork page</div>} />
        {/* TODO: Test page. Remove after testing */}
        <Route path="/test" element={<div>Test page</div>} />
        <Route path="/" element={<div>Root page</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
