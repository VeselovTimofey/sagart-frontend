import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Box, Stack, Typography } from '@mui/material';

import ProductsList from '../../components/ProductsList';
import BreadcrumbsWidget from '../../components/BreadcrumbsWidget';
import breadcrumbNameMap from '../../utils/const';
import FilterBarWidget from '../../components/FilterBarWidget';
import { AppStore } from '../../utils/types/appDispatch';

export default function CataloguePage() {
  const { category } = useParams();
  const name = category
    ? breadcrumbNameMap[`/catalogue/${category}`]
    : 'Каталог';

  const { products } = useSelector((state: AppStore) => state.products);
  const currentProducts = products.filter(
    (product) => product.type === name || name === 'Каталог'
  );

  return (
    <Stack
      component="main"
      direction="column"
      px={7.5}
      pt={5}
      pb={20}
      gap={7.5}
    >
      <Stack direction="column" gap={3}>
        <BreadcrumbsWidget />
        <Typography variant="h1" fontSize={32}>
          {name}
        </Typography>
      </Stack>
      <Stack direction="row" gap={5}>
        <Box component="aside">
          <Box
            position="sticky"
            top={20}
            sx={{
              width: 296,
              overflowY: 'scroll',
            }}
          >
            <FilterBarWidget />
          </Box>
        </Box>
        <Box component="section" sx={{ flexGrow: 1 }}>
          <ProductsList
            products={currentProducts}
            amountToShow={20}
            size="medium"
          />
        </Box>
      </Stack>
    </Stack>
  );
}
