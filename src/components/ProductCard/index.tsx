import { useCallback } from 'react';

import type { CardProps } from '@mui/material';

import type { IProduct } from '../../utils/types';

import ProductCardUi from './ui';
import { authors } from '../../utils/mock/authors';

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

  const author =
    authors.find((currentAuthor) => currentAuthor.id === product.author_id) ||
    authors[0];

  return (
    <ProductCardUi
      {...{ size }}
      {...{ product }}
      {...{ author }}
      {...props}
      onFavouriteClick={toggleIsFavourite}
      onBasketClick={toggleIsInBasket}
    />
  );
}
