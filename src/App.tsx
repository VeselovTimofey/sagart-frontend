import { Stack } from '@mui/material';
import ProductsList from './components/ProductsList';
import { artworks } from './utils/mock/artworks';

function App() {
  return (
    <Stack>
      <ProductsList products={artworks} amountToShow={8} size="large" />;
    </Stack>
  );
}

export default App;
