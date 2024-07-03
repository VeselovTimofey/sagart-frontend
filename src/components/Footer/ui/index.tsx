import { IconButton, Stack, Typography } from '@mui/material';

import NewsSubscription from '../../../elements/NewsSubscription/index';
import vkPath from '../../../images/svg/vkicon.svg';
import telegramPath from '../../../images/svg/telegramicon.svg';
import zenPath from '../../../images/svg/zenicon.svg';
import FOOTERLINKGROUPS from '../../../utils/constant/footerLinkGroup';
import FooterLinkGroup from '../../../elements/FooterLinkGroup';

function FooterUi() {
  return (
    <Stack
      component="footer"
      direction="column"
      px={7.5}
      sx={{
        paddingBottom: '2.5rem',
        borderTop: '1px solid #D9D9D9',
      }}
      gap={7.5}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        gap={21}
        sx={{
          borderBottom: '1px solid #D9D9D9',
          paddingTop: '2.5rem',
          paddingBottom: '3.75rem',
        }}
      >
        <Stack direction="column" gap={2.5} alignItems="center">
          <Typography variant="h2">SAGAART</Typography>
          <Stack direction="row" gap={1.5}>
            <IconButton sx={{ width: '3rem', height: '3rem' }}>
              <img
                src={vkPath}
                alt="Логотип группы вк"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton sx={{ width: '3rem', height: '3rem' }}>
              <img
                src={telegramPath}
                alt="Логотип группы в телеграме"
                width={24}
                height={24}
              />
            </IconButton>
            <IconButton sx={{ width: '3rem', height: '3rem' }}>
              <img
                src={zenPath}
                alt="Логотип группы яндекс дзена"
                width={24}
                height={24}
              />
            </IconButton>
          </Stack>
        </Stack>
        <NewsSubscription />
      </Stack>
      <Stack
        direction="row"
        gap={3}
        alignItems="flex-start"
        justifyContent="space-between"
      >
        {FOOTERLINKGROUPS.map((element) => (
          <FooterLinkGroup
            name={element.name}
            links={element.links}
            key={element.name}
          />
        ))}
      </Stack>
      <Stack direction="column" alignItems="flex-end">
        <Typography component="p" variant="inherit">
          &#169;SAGAART.com 2024
        </Typography>
      </Stack>
    </Stack>
  );
}

export default FooterUi;
