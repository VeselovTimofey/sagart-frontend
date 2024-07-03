import artworks from '../../utils/mock/artworks';
import ProductPageUi from './ui';

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
      {...{ otherWorksByAuthor }}
      {...{ similarWorks }}
    />
  );
}
