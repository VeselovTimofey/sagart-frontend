import {
  FavoriteBorderOutlined,
  ShoppingBasketOutlined,
} from '@mui/icons-material';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Stack,
  Typography,
  type CardProps,
} from '@mui/material';

import type { IProduct } from '../../../utils/types';

interface IProductCardUi extends CardProps {
  product: IProduct;
  onFavouriteClick: () => void;
  onBasketClick: () => void;
}

export default function ProductCardUi({
  product,
  onFavouriteClick,
  onBasketClick,
  ...props
}: IProductCardUi) {
  return (
    <Card
      elevation={0}
      {...props}
      sx={{
        ...props.sx,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <IconButton
        size="small"
        type="button"
        onClick={onFavouriteClick}
        sx={{
          position: 'absolute',
          top: '0.5rem',
          right: '0.5rem',
          width: '1.5rem',
          height: '1.5rem',
        }}
      >
        <FavoriteBorderOutlined />
      </IconButton>
      <CardMedia
        component="img"
        sx={{
          height: '14.625rem',
          padding: '0.75rem',
          objectFit: 'contain',
          width: 'calc(100% - 1.5rem)',
          aspectRatio: 1,
          backgroundColor: '#FAFAFA',
        }}
        image={product.photo}
        title={product.name}
      />
      <Stack direction="column" justifyContent="space-between" flexGrow={1}>
        <CardContent sx={{ padding: 0 }}>
          <Stack direction="column" gap={1}>
            <Stack direction="column" gap={0.5}>
              <Typography variant="h5" fontSize={20} lineHeight={1.2}>
                Нисо Атаханова
              </Typography>
              <Typography variant="body1" color="text.primary">
                Onsen (mini) Мадарао
              </Typography>
            </Stack>
            <Stack direction="column" gap={0}>
              <Typography variant="body2" color="text.secondary">
                Холст, масло
              </Typography>
              <Typography variant="body2" color="text.secondary">
                80 x 60 см
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
        <CardActions disableSpacing sx={{ padding: 0 }}>
          <Stack
            sx={{ width: '100%' }}
            direction="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" color="text.primary">
              85 000 ₽
            </Typography>
            <IconButton size="small" type="button" onClick={onBasketClick}>
              <ShoppingBasketOutlined />
            </IconButton>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
}
