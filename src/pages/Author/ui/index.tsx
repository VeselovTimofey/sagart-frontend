import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Button,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import {
  AutoAwesomeOutlined,
  StarOutline,
  Telegram,
  WorkspacePremiumOutlined,
} from '@mui/icons-material';

import type { IAuthor, IProduct } from '../../../utils/types';
import BreadcrumbsWidget from '../../../components/BreadcrumbsWidget';
import ProductsList from '../../../components/ProductsList';

interface IAuthorPageUi extends IAuthor {
  worksByAuthor: IProduct[] | null;
}

export default function AuthorPageUi({
  worksByAuthor,
  first_name,
  last_name,
  biography,
  solo_shows,
  group_shows,
  winner_top_awards,
  collected_private_collectors,
  collected_major_institutions,
  social_networks,
}: IAuthorPageUi) {
  const shows = () => {
    if (solo_shows && group_shows) {
      return 'Групповые и сольные выставки';
    }
    if (solo_shows) {
      return 'Сольные выставки';
    }
    return 'Групповые выставки';
  };

  const collections = () => {
    if (collected_private_collectors && collected_major_institutions) {
      return 'Работы художника находятся в частных и музейных коллекциях';
    }
    if (collected_private_collectors) {
      return 'Работы художника находятся в частных коллекциях';
    }
    return 'Работы художника находятся в музейных коллекциях';
  };

  return (
    <Stack component="main" direction="column" px={7.5} pt={5} pb={20} gap={3}>
      <BreadcrumbsWidget />
      <Stack direction="column" gap={7.5} position="relative">
        {social_networks && (
          <Stack
            direction="row"
            gap={1.5}
            position="absolute"
            top={0}
            right={0}
          >
            {social_networks.map(({ name }) => (
              <IconButton
                key={name}
                size="large"
                color="primary"
                LinkComponent={RouterLink}
                href={'/'}
              >
                <Telegram />
              </IconButton>
            ))}
          </Stack>
        )}

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
              <Typography variant="h2">{`${first_name} ${last_name}`}</Typography>
              <Typography sx={{ maxWidth: '49rem' }}>{biography}</Typography>
            </Stack>
          </Stack>
          <Stack direction="row" gap={3}>
            {(solo_shows || group_shows) && (
              <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
                <StarOutline />
                <Typography>{shows()}</Typography>
              </Stack>
            )}
            {winner_top_awards && (
              <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
                <WorkspacePremiumOutlined />
                <Typography>
                  Художник имеет награды в области искусства
                </Typography>
              </Stack>
            )}
            {(collected_major_institutions || collected_private_collectors) && (
              <Stack direction="row" gap={2.5} sx={{ width: '19.5rem' }}>
                <AutoAwesomeOutlined />
                <Typography>{collections()}</Typography>
              </Stack>
            )}
          </Stack>
        </Stack>
        <Divider flexItem />
        <Stack gap={3}>
          <Typography variant="h2">Аналитика</Typography>
          <Stack gap={1} sx={{ maxWidth: '20.5rem' }}>
            <Button component={RouterLink} variant="contained" to={'/'}>
              Купить подписку
            </Button>
            <Typography variant="body2">
              *преимущества аналитики доступны только по подписке
            </Typography>
          </Stack>
        </Stack>
        {worksByAuthor && (
          <>
            <Divider flexItem />
            <Stack gap={4}>
              <Stack gap={0.5}>
                <Typography variant="h2">Все работы художника</Typography>
                <Link component={RouterLink} to={'/'}>
                  смотреть все &rarr;
                </Link>
              </Stack>
              <ProductsList
                products={worksByAuthor}
                size="large"
                amountToShow={5}
              />
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  );
}
