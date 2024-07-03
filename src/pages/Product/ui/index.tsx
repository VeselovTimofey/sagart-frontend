import { Link as RouterLink } from 'react-router-dom';

import { Box, Button, Divider, Link, Stack, Typography } from '@mui/material';
import {
  AutoAwesomeOutlined,
  StarOutline,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';

import type { IProduct } from '../../../utils/types';
import BreadcrumbsWidget from '../../../components/BreadcrumbsWidget';
import ProductsList from '../../../components/ProductsList';

interface IProductPageUi extends IProduct {
  otherWorksByAuthor: IProduct[] | null;
  similarWorks: IProduct[];
}

export default function ProductPageUi({
  otherWorksByAuthor,
  similarWorks,
  type,
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
          <Box sx={{ width: 760, height: 579, backgroundColor: 'salmon' }} />
          <Stack
            component="article"
            direction="column"
            justifyContent="space-between"
          >
            <Stack>
              <Stack gap={2.5} sx={{ marginBottom: '2rem' }}>
                <Typography>{type}</Typography>
                <Typography variant="h2">{name}</Typography>
                <Stack>
                  {/* TODO: Add data */}
                  <Typography>Холст, масло</Typography>
                  <Typography>{size}</Typography>
                </Stack>
              </Stack>
              {/* TODO: Add data */}
              <Link
                component={RouterLink}
                to={'/'}
                sx={{ marginBottom: '3.5rem' }}
              >
                Винсент Ван Гог
              </Link>
              <Stack sx={{ height: '100px', backgroundColor: 'beige' }}>
                <Typography>Здесь цены и опции</Typography>
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
          <Typography sx={{ maxWidth: '49rem' }}>
            Стремясь к спокойной обстановке,ван Гог начал рисовать в Аньере в
            апреле 1887 года, где жили его коллеги-художники Синьяк и Бернар. За
            городскими укреплениями и вдоль берегов Сены лежат Аньер и остров
            Гран-Жатт. Он экспериментировал с более светлой и красочной
            палитрой, чем та, что использовалась в его ранних голландских и
            монмартрских картинах.
          </Typography>
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
            {/* TODO: Add data */}
            <Typography>Уникальная работа</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Категория:</Typography>
            {/* TODO: Add data */}
            <Typography>{type}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Стиль:</Typography>
            <Typography>{genre}</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Жанр:</Typography>
            {/* TODO: Add data */}
            <Typography>Современный пейзаж</Typography>
          </Stack>
          <Stack gap={1}>
            <Typography>Рамка:</Typography>
            {/* TODO: Add data */}
            <Typography>Включено</Typography>
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
            src="/mock-image.png.webp"
            alt=""
            sx={{
              width: '12.5rem',
              height: '12.5rem',
              borderRadius: '100%',
            }}
          />
          <Stack gap={2.5}>
            {/* TODO: Add data */}
            <Typography variant="h2">Винсент Ван Гог</Typography>
            {/* TODO: Add data */}
            <Typography sx={{ maxWidth: '49rem' }}>
              Винсент Виллем ван Гог (30 марта 1853 — 29 июля 1890) —
              нидерландский живописец и график, одна из трёх главных фигур
              постимпрессионизма (наряду с Полем Сезанном и Полем Гогеном), чьё
              творчество оказало значительное влияние на живопись XX века.
            </Typography>
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
