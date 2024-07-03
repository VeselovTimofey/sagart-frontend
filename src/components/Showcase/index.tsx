import ShowCaseUi from './ui';

import { IProduct } from '../../utils/types';

export interface IShowCase {
  title: string;
  link: string;
  products: Array<IProduct>;
}

function ShowCase({ title, link, products }: IShowCase) {
  return <ShowCaseUi title={title} link={link} products={products} />;
}

export default ShowCase;
