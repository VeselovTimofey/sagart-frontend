// TODO: Here to add Catalogue page.
// TODO: Add data prefetching in Route component
// TODO: Use param to filter request (on router side)

import { useParams } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import ProductsList from '../../components/ProductsList';
import artworks from '../../utils/mock/artworks';
import BreadcrumbsWidget from '../../components/BreadcrumbsWidget';
import breadcrumbNameMap from '../../utils/const';

export default function CataloguePage() {
  const { category } = useParams();
  const name = category
    ? breadcrumbNameMap[`/catalogue/${category}`]
    : 'Каталог';

  return (
    <Stack direction="column">
      <Stack direction="column">
        <BreadcrumbsWidget />
        <Typography variant="h1">{name}</Typography>
      </Stack>
      <Stack direction="row">
        <Box>
          <Box
            position="sticky"
            top={20}
            sx={{
              width: 312,
              backgroundColor: 'indigo',
              minHeight: 800,
            }}
          >
            <Typography variant="h5" color="white">
              Фильтры
            </Typography>
          </Box>
        </Box>
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <ProductsList products={artworks} amountToShow={20} size="large" />
        </Box>
      </Stack>
    </Stack>
  );
}
