import { Link as RouterLink } from 'react-router-dom';

import { Button, Stack, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import type ICategory from '../../../utils/types/category';

import { card, icon } from '../style/style.module';

function CategoryUi({ title, link, imageurl }: ICategory) {
  return (
    <Button component={RouterLink} to={link}>
      <Stack
        justifyContent="center"
        position="relative"
        sx={card(imageurl)}
        color="primary"
      >
        <Typography component="h2" variant="h2">
          {title}
        </Typography>
        <ArrowForwardIcon color="primary" sx={icon} />
      </Stack>
    </Button>
  );
}

export default CategoryUi;
