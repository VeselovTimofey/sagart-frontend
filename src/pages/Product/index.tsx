import artworks from '../../utils/mock/artworks';
import ProductPageUi from './ui';

export default function ProductPage() {
  const product = artworks[0];
  const otherWorksByAuthor = artworks.slice(5);
  const similarWorks = artworks;

  return (
    <ProductPageUi
      {...product}
      {...{ otherWorksByAuthor }}
      {...{ similarWorks }}
    />
  );
}
