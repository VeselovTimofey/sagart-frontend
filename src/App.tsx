import ProductCard from './components/ProductCard';
import { IProduct } from './utils/types';

// TODO: Clean up after testing
const product1: IProduct = {
  id: 1,
  name: 'Modern Art Sculpture',
  descrition_id: 101,
  author_id: 201,
  make_date: '2023-05-15',
  size: '40x30x20 cm',
  weight: 5.5,
  edition: 'Limited',
  auth_signature: true,
  photo: '/mock-image.png.webp',
  type: 'Sculpture',
  category: 'Art',
  status: 'Available',
  price: 1200.0,
};

function App() {
  return (
    <ProductCard
      product={product1}
      sx={{ width: 245, height: 399, borderRadius: 0 }}
    />
  );
}

export default App;
