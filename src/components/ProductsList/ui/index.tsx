import { Link as RouterLink } from 'react-router-dom';

import { Box, Link } from '@mui/material';

import type { IProduct } from '../../../utils/types';
import ProductCard from '../../ProductCard';

import { list } from './styles';

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
    <Box component="ul" sx={list(size)}>
      {products.slice(0, amountToShow).map((product) => (
        <Box component="li" key={product.id} sx={{ width: '100%' }}>
          <Link
            component={RouterLink}
            to={`/products/${product.id}`}
            sx={{ textDecoration: 'none', color: 'inherit' }}
            preventScrollReset={true}
          >
            <ProductCard
              {...{ product }}
              size={size === 'medium' ? 'small' : 'medium'}
            />
          </Link>
        </Box>
      ))}
    </Box>
  );
}
