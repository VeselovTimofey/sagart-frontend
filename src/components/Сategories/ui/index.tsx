import { Box } from '@mui/material';

import style from '../style/style.module';
import Category from '../../../elements/Category';
import CATEGORIES from '../../../utils/constant/categories';

function СategoriesUi() {
  return (
    <Box component="section" sx={style.categories} px={7.5}>
      {CATEGORIES.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          link={category.link}
          imageurl={category.imageurl}
        />
      ))}
    </Box>
  );
}

export default СategoriesUi;
