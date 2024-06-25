import { Link as RouterLink } from 'react-router-dom';

import { Box, Link } from '@mui/material';

import type { IProduct } from '../../../utils/types';
import ProductCard from '../../ProductCard';

interface IProductsListUi {
  size: 'medium' | 'large';
  products: IProduct[];
  amountToShow: number;
}

/**
 * Renders product cards list.
 * @param props.products - Products array
 * @param props.size - Component size. Medium for 4 columns, large for 5 columns
 * @param props.amountToShow - Maximum number of cards to render
 */
export default function ProductsListUi({
  size,
  products,
  amountToShow,
}: IProductsListUi) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `repeat(auto-fit, minmax(${size === 'medium' ? '224px' : '245px'}, 1fr))`,
        gap: '1.5rem',
        justifyItems: 'center',
        width: '100%',
      }}
    >
      {products.slice(0, amountToShow).map((product) => (
        <Link
          component={RouterLink}
          to={`/products/${product.id}`}
          key={product.id}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <ProductCard
            {...{ product }}
            size={size === 'medium' ? 'small' : 'medium'}
          />
        </Link>
      ))}
    </Box>
  );
}
