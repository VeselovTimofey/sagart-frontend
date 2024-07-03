import { useParams } from 'react-router-dom';

import { Box, Stack, Typography } from '@mui/material';

import ProductsList from '../../components/ProductsList';
import artworks from '../../utils/mock/artworks';
import BreadcrumbsWidget from '../../components/BreadcrumbsWidget';
import breadcrumbNameMap from '../../utils/const';
import FilterBarWidget from '../../components/FilterBarWidget';

export default function CataloguePage() {
  const { category } = useParams();
  const name = category
    ? breadcrumbNameMap[`/catalogue/${category}`]
    : 'Каталог';

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
          <ProductsList products={artworks} amountToShow={20} size="medium" />
        </Box>
      </Stack>
    </Stack>
  );
}
