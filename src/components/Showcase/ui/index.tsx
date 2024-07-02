import { Grid, Link, Typography } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';

import ProductsList from '../../ProductsList';
import type { IProduct } from '../../../utils/types/product';

export interface IShowCaseUi {
  title: string;
  link: string;
  products: IProduct[];
}

function ShowCaseUi({ title, link, products }: IShowCaseUi) {
  return (
    <Grid component="section" direction="column" container>
      <Typography variant="h2" component="h2">
        {title}
      </Typography>
      <Link href={link}>
        <Grid spacing={1} container>
          <Typography variant="inherit" component="p">
            смотреть все
          </Typography>
          <ArrowForward />
        </Grid>
      </Link>
      <ProductsList products={products} size="large" amountToShow={10} />
    </Grid>
  );
}

export default ShowCaseUi;
