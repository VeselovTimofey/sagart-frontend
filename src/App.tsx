import { Stack } from '@mui/material';
import ProductsList from './components/ProductsList';
import { artworks } from './utils/mock/artworks';
        
import Footer from './components/Footer';

function App() {
  return (
    <Stack>
      <ProductsList products={artworks} amountToShow={8} size="large" />;
    </Stack>
    <Footer />
  );
}

export default App;
