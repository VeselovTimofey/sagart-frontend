import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductPageUi from './ui';
import { AppStore } from '../../utils/types/appDispatch';
import { authors } from '../../utils/mock/authors';

export default function ProductPage() {
  const { productId } = useParams();
  const { products } = useSelector((state: AppStore) => state.products);
  const product =
    products.find((currentProduct) => `${currentProduct.id}` === productId) ||
    products[0];
  const user =
    authors.find((currentAuthors) => currentAuthors.id === product.author_id) ||
    authors[0];
  const otherWorksByAuthor = products.filter(
    (currentProduct) => currentProduct.author_id === user.id
  );
  const similarWorks = products.slice(5);

  return (
    <ProductPageUi
      {...product}
      {...{ user }}
      {...{ otherWorksByAuthor }}
      {...{ similarWorks }}
    />
  );
}
