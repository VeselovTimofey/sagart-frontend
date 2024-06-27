import { Container, Grid, Link, Typography } from '@mui/material';

import NewsSubscription from '../../../elements/NewsSubscription/index';
import vkPath from '../../../images/svg/vkicon.svg';
import telegramPath from '../../../images/svg/telegramicon.svg';
import zenPath from '../../../images/svg/zenicon.svg';
import FOOTERLINKGROUPS from '../../../utils/constant/footerLinkGroup';
import FooterLinkGroup from '../../../elements/FooterLinkGroup';

function FooterUi() {
  return (
    <Container component="footer">
      <Grid direction="column" alignItems="center" container>
        <Grid item direction="row" alignItems="center" container>
          <Grid
            item
            xs={3}
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={2}
            container
          >
            <Grid item>
              <Typography variant="h2" component="h2">
                SAGAART
              </Typography>
            </Grid>
            <Grid
              item
              justifyContent="flex-start"
              alignItems="center"
              spacing={1}
              container
            >
              <Grid item>
                <Link href="#">
                  <img src={vkPath} alt="Логотип группы вк." />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img src={telegramPath} alt="Логотип группы в телеграмме." />
                </Link>
              </Grid>
              <Grid item>
                <Link href="#">
                  <img src={zenPath} alt="Логотип группы яндекс дзена." />
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <NewsSubscription />
        </Grid>
        <Grid item container>
          {FOOTERLINKGROUPS.map((element) => (
            <FooterLinkGroup
              name={element.name}
              links={element.links}
              key={element.name}
            />
          ))}
        </Grid>
        <Grid alignSelf="flex-end" item>
          <Typography component="p" variant="inherit">
            &#169;SAGAART.com 2024
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default FooterUi;
