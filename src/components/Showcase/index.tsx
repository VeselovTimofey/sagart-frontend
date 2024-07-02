import ShowCaseUi from './ui';

import artworks from '../../utils/mock/artworks';

export interface IShowCase {
  title: string;
  link: string;
}

function ShowCase({ title, link }: IShowCase) {
  return <ShowCaseUi title={title} link={link} products={artworks} />;
}

export default ShowCase;
