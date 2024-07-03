import { Link as RouterLink } from 'react-router-dom';

import { Link, Stack, Typography } from '@mui/material';
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
    <Stack component="section" direction="column" gap={4} px={7.5}>
      <Stack direction="column" gap={0.5}>
        <Typography variant="h2">{title}</Typography>
        <Link component={RouterLink} to={link} sx={{ textDecoration: 'none' }}>
          <Stack direction="row" alignItems="center" gap={1} color="#B8B8B8">
            <Typography>смотреть все</Typography>
            <ArrowForward />
          </Stack>
        </Link>
      </Stack>
      <ProductsList products={products} size="large" amountToShow={10} />
    </Stack>
  );
}

export default ShowCaseUi;
