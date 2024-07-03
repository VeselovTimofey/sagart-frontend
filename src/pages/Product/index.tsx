import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductPageUi from './ui';
import { AppStore } from '../../utils/types/appDispatch';
import { authors } from '../../utils/mock/authors';

export default function ProductPage() {
  const { productId } = useParams();
  const allProduct = useSelector((state: AppStore) => state.products.products);
  const product =
    allProduct.find((currentProduct) => `${currentProduct.id}` === productId) ||
    allProduct[0];
  const user =
    authors.find((currentAuthors) => currentAuthors.id === product.author_id) ||
    authors[0];
  const otherWorksByAuthor = allProduct.filter(
    (currentProduct) => currentProduct.author_id === user.id
  );
  const similarWorks = allProduct.slice(5);

  return (
    <ProductPageUi
      {...product}
      {...{ user }}
      {...{ otherWorksByAuthor }}
      {...{ similarWorks }}
    />
  );
}
