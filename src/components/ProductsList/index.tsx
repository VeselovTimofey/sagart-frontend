import type { IProduct } from '../../utils/types';
import ProductsListUi from './ui';

interface IProductsList {
  products: IProduct[];
  size: 'large' | 'medium';
  amountToShow: number;
}

/**
 * Product list component.
 * @param props.products - Products array
 * @param props.size - Component size. Medium for 4 columns, large for 5 columns
 * @param props.amountToShow - Maximum number of cards to render
 */
export default function ProductsList(props: IProductsList) {
  return <ProductsListUi {...props} />;
}
