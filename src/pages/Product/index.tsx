import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import artworks from '../../utils/mock/artworks';
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
  const otherWorksByAuthor = artworks.slice(5);
  const similarWorks = artworks;

  return (
    <ProductPageUi
      {...product}
      {...{ user }}
      {...{ otherWorksByAuthor }}
      {...{ similarWorks }}
    />
  );
}
