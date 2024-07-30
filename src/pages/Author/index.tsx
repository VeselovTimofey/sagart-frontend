import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import AuthorPageUi from './ui';
import type { AppStore } from '../../utils/types/appDispatch';

export default function AuthorPage() {
  const { authorId } = useParams();
  const { authors } = useSelector((state: AppStore) => state.authors);
  const { products } = useSelector((state: AppStore) => state.products);
  const author =
    authors.find((currentAuthor) => currentAuthor.id === authorId) ||
    authors[0];
  const worksByAuthor = products
    .filter((currentProduct) => currentProduct.author_id === author.id)
    .slice(5);

  return <AuthorPageUi {...author} {...{ worksByAuthor }} />;
}
