import { Grid, Link, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import type ICategory from '../../../utils/types/category';

function CategoryUi({ title, link, imageurl }: ICategory) {
  return (
    /* //TODO: add style to separate file */
    <Grid
      item
      style={{
        background: `url(${imageurl}) no-repeat center / cover`,
        width: '424px',
        height: '220px',
      }}
      container
    >
      <Grid item>
        <Typography>{title}</Typography>
      </Grid>
      <Grid item>
        <Link href={link}>
          <ArrowForwardIcon />
        </Link>
      </Grid>
    </Grid>
  );
}

export default CategoryUi;
