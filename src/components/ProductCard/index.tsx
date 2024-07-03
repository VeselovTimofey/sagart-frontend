import { useCallback } from 'react';

import type { CardProps } from '@mui/material';

import type { IProduct } from '../../utils/types';

import ProductCardUi from './ui';

interface IProductCard extends CardProps {
  product: IProduct;
  size: 'small' | 'medium';
}

/**
 * Product Card Component.
 * @param props - MUI Card extra props
 * @param props.product - Product data
 * @param props.size - Card size. Small for 224px width, medium for 244px width
 */
export default function ProductCard({ product, size, ...props }: IProductCard) {
  const toggleIsFavourite = useCallback(
    () => console.log('toggled favourite: ', product),
    [product]
  );
  const toggleIsInBasket = useCallback(
    () => console.log('toggled basket: ', product),
    [product]
  );

  return (
    <ProductCardUi
      {...{ size }}
      {...{ product }}
      {...props}
      onFavouriteClick={toggleIsFavourite}
      onBasketClick={toggleIsInBasket}
    />
  );
}
