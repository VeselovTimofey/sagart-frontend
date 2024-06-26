import { Box, Stack } from '@mui/material';
import BreadcrumbsWidget from '../../components/BreadcrumbsWidget';

export default function ProductPage() {
  return (
    <Stack component="main" direction="column" px="3.75rem" gap={7.5}>
      <Stack direction="column" gap={3}>
        <BreadcrumbsWidget />
        <Stack component="section" direction="row" gap={3}>
          <Box
            sx={{ width: 760, height: 579, backgroundColor: 'salmon' }}
          ></Box>
          <Stack component="article" direction="column">
            <Stack></Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
