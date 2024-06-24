// TODO: Here to add Catalogue page.
// TODO: Add param with category
// TODO: Add data prefetching in Route component

import { Stack } from '@mui/material';
import ProductsList from '../../components/ProductsList';
import { artworks } from '../../utils/mock/artworks';

export default function CataloguePage() {
  return (
    <Stack>
      <ProductsList products={artworks} amountToShow={8} size="large" />
    </Stack>
  );
}
