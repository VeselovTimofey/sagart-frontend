import { Grid } from '@mui/material';

import Category from '../../../elements/Category';
import CATEGORIES from '../../../utils/constant/categories';

function СategoriesUi() {
  return (
    <Grid component="section" container>
      {CATEGORIES.map((category) => (
        <Category
          key={category.title}
          title={category.title}
          link={category.link}
          imageurl={category.imageurl}
        />
      ))}
    </Grid>
  );
}

export default СategoriesUi;
