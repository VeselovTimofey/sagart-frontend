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
  size: 'small' | 'medium';
  product: IProduct;
  onFavouriteClick: () => void;
  onBasketClick: () => void;
}

/**
 * Renders Card UI.
 * @param props - MUI Card extra props
 * @param props.product - Product data
 * @param props.size - Card size. Small for 224px width, medium for 245px width
 * @callback props.onFavouriteClick - The author of the book
 * @callback props.onBasketClick - The author of the book
 */
export default function ProductCardUi({
  size,
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
        width: size === 'small' ? 224 : 245,
        height: 399,
        borderRadius: 0,
        ...props.sx,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      <IconButton
        size="small"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          onFavouriteClick();
        }}
        sx={{
          position: 'absolute',
          top: size === 'small' ? '0.375rem' : '0.5rem',
          right: size === 'small' ? '0.375rem' : '0.5rem',
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
          padding: size === 'small' ? '0.75rem' : '1.25rem',
          objectFit: 'contain',
          width: `calc(100% - ${size === 'small' ? '1.5rem' : '2.5rem'})`,
          aspectRatio: 1,
          backgroundColor: '#FAFAFA',
        }}
        src={product.preview_photo}
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
                {product.name}
              </Typography>
            </Stack>
            <Stack direction="column" gap={0}>
              <Typography variant="body2" color="text.secondary">
                {product.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.size}
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
              {product.price.toLocaleString('ru-RU', {
                style: 'currency',
                currency: 'RUB',
              })}
            </Typography>
            <IconButton
              size="small"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                onBasketClick();
              }}
            >
              <ShoppingBasketOutlined />
            </IconButton>
          </Stack>
        </CardActions>
      </Stack>
    </Card>
  );
}
