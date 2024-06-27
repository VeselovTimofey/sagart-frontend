import artworks from '../../utils/mock/artworks';
import { authors } from '../../utils/mock/authors';
import AuthorPageUi from './ui';

export default function AuthorPage() {
  // TODO: Add data requests here
  const author = authors[0];
  const worksByAuthor = artworks.slice(5);

  return <AuthorPageUi {...author} {...{ worksByAuthor }} />;
}
