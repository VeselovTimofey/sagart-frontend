import artworks from '../../utils/mock/artworks';
import ProductPageUi from './ui';

export default function ProductPage() {
  // TODO: Add data requests here
  const product = artworks[0];
  // const author = {}
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
