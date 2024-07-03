import {
  // FavoriteBorderOutlined,
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

import type { IAuthor, IProduct } from '../../../utils/types';

import { card, image } from './styles';

interface IProductCardUi extends CardProps {
  size: 'small' | 'medium';
  product: IProduct;
  author: IAuthor;
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
  author,
  onFavouriteClick,
  onBasketClick,
  ...props
}: IProductCardUi) {
  return (
    <Card elevation={0} {...props} sx={(card(size), { ...props.sx })}>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: '#FAFAFA',
        }}
      >
        <CardMedia
          component="img"
          sx={image(size)}
          src={product.preview_photo}
          title={product.name}
        />
      </Stack>
      <Stack
        direction="column"
        justifyContent="space-between"
        flexGrow={1}
        sx={{ paddingTop: '0.75rem' }}
      >
        <CardContent sx={{ padding: 0 }}>
          <Stack direction="column" gap={1}>
            <Stack direction="column" gap={0.5}>
              <Typography
                variant="h5"
                fontSize={20}
                fontWeight={600}
                lineHeight={1.2}
              >
                {`${author.first_name} ${author.middle_name} ${author.last_name}`}
              </Typography>
              <Typography variant="body1" color="text.primary">
                {product.name}
              </Typography>
            </Stack>
            <Stack direction="column" gap={0}>
              <Typography variant="body1" color="text.secondary">
                {product.type}
              </Typography>
              <Typography variant="body1" color="text.secondary">
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
