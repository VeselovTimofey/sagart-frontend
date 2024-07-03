import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import {
  AutoAwesomeOutlined,
  StarOutline,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';

import type { IAuthor, IProduct } from '../../../utils/types';
import BreadcrumbsWidget from '../../../components/BreadcrumbsWidget';
import ProductsList from '../../../components/ProductsList';
import { price } from '../../../utils/mock/priceHistory';

import PriceAnalytics from './PriceAnalytics';

interface IProductPageUi extends IProduct {
  otherWorksByAuthor: IProduct[] | null;
  similarWorks: IProduct[];
  user: IAuthor;
}

export default function ProductPageUi({
  otherWorksByAuthor,
  similarWorks,
  user,
  type,
  category,
  preview_photo,
  edition,
  status,
  name,
  size,
  make_year,
  genre,
}: IProductPageUi) {
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
        <Stack component="section" direction="row" gap={3}>
          <Box
            sx={{
              width: 760,
              height: 579,
              backgroundImage: `url(${preview_photo})`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          />
          <Stack
            component="article"
            direction="column"
            justifyContent="space-between"
          >
            <Stack>
              <Stack gap={2.5} sx={{ marginBottom: '2rem' }}>
                <Typography>{category}</Typography>
                <Typography variant="h2">{name}</Typography>
                <Stack>
                  <Typography>{type}</Typography>
                  <Typography>{size}</Typography>
                </Stack>
              </Stack>
              {/* TODO: Add data */}
              <Link
                component={RouterLink}
                to={'/'}
                sx={{ marginBottom: '3.5rem' }}
              >
                {user.first_name + user.middle_name + user.last_name}
              </Link>
              <Stack>
                <PriceAnalytics data={price} />
                {/* TODO: Here goes component with options like 'origin', 'limited edirion' etc */}
              </Stack>
            </Stack>
            <Stack gap={1.5}>
              <Button type="button" size="large" variant="contained" disabled>
                Добавить в корзину
              </Button>
              <Button type="button" size="large" variant="contained">
                Получить доступ к аналитике
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack gap={3}>
        <Stack gap={2.5}>
          <Typography variant="h2">О работе</Typography>
          {/* TODO: Add data */}
          <Typography sx={{ maxWidth: '49rem' }}>{user.biography}</Typography>
        </Stack>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            columnGap: '2.5rem',
            rowGap: '4.5rem',
          }}
        >
          <Stack gap={1}>
            <Typography>Год создания:</Typography>
            <Typography>{`${make_year} год`}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Размер:</Typography>
            <Typography>{size}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Материал работы:</Typography>
            {/* TODO: Add data */}
            <Typography>Масло</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Материал планшета:</Typography>
            {/* TODO: Add data */}
            <Typography>ДВП</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Уникальность работы:</Typography>
            <Typography>{edition}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Категория:</Typography>
            <Typography>{category}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Стиль:</Typography>
            <Typography>{genre}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Жанр:</Typography>
            <Typography>{genre}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Рамка:</Typography>
            <Typography>{status}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Сертификат подлинности:</Typography>
            {/* TODO: Add data */}
            <Typography>Включено (предоставлено галереей)</Typography>
          </Stack>
        </Box>
      </Stack>
      <Divider flexItem />
      <Stack gap={7.5}>
        <Stack direction="row" gap={3}>
          <Box
            component="img"
            src="/sagart-frontend/self-portrait.jpeg"
            alt=""
            sx={{
              width: '12.5rem',
              height: '12.5rem',
              borderRadius: '100%',
              objectFit: 'cover',
            }}
          />
          <Stack gap={2.5}>
            {/* TODO: Add data */}
            <Typography variant="h2">
              {user.first_name + user.middle_name + user.last_name}
            </Typography>
            {/* TODO: Add data */}
            <Typography sx={{ maxWidth: '49rem' }}>{user.biography}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" gap={3}>
          <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
            <StarOutline />
            {/* TODO: Add data */}
            <Typography>Выставки и проекты</Typography>
          </Stack>
          <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
            <WorkspacePremiumOutlined />
            {/* TODO: Add data */}
            <Typography>Художник имеет награды в области искусства</Typography>
          </Stack>
          <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
            <AutoAwesomeOutlined />
            {/* TODO: Add data */}
            <Typography>
              Работы этого художника находятся в частных и музейных коллекциях
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      {otherWorksByAuthor && (
        <>
          <Divider flexItem />
          <Stack gap={4}>
            <Stack gap={0.5}>
              <Typography variant="h2">Другие работы художника</Typography>
              <Link component={RouterLink} to={'/'}>
                смотреть все &rarr;
              </Link>
            </Stack>
            <ProductsList
              products={otherWorksByAuthor}
              size="large"
              amountToShow={5}
            />
          </Stack>
        </>
      )}
      <Divider flexItem />
      <Stack gap={4}>
        <Stack gap={0.5}>
          <Typography variant="h2">Похожие товары</Typography>
          <Link component={RouterLink} to={'/'}>
            смотреть все &rarr;
          </Link>
        </Stack>
        <ProductsList products={similarWorks} size="large" amountToShow={5} />
      </Stack>
    </Stack>
  );
}
