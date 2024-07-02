import CategoryUi from './ui';
import type ICategory from '../../utils/types/category';

function Category({ title, link, imageurl }: ICategory) {
  return <CategoryUi title={title} link={link} imageurl={imageurl} />;
}

export default Category;
