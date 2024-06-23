import { useCallback } from 'react';

import type { CardProps } from '@mui/material';

import type { IProduct } from '../../utils/types';

import ProductCardUi from './ui';

interface IProductCard extends CardProps {
  product: IProduct;
}

export default function ProductCard({ product, ...props }: IProductCard) {
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
      {...{ product }}
      {...props}
      onFavouriteClick={toggleIsFavourite}
      onBasketClick={toggleIsInBasket}
    />
  );
}
