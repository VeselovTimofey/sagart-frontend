import {
  AppBar,
  Button,
  Grid,
  InputBase,
  Link,
  Typography,
  Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import logoPath from '../../../images/svg/logo.svg';
import HEADERLINK from '../../../utils/constant/headerLink';

function HeaderUi() {
  return (
    <AppBar color="transparent" position="static">
      <Grid direction="column" container>
        <Grid item>
          <Toolbar>
            <Link href="#">
              <img src={logoPath} alt="Логотип сайта." />
            </Link>
            <SearchIcon />
            <InputBase placeholder="Поиск" />
            <Button sx={{ ml: 'auto' }}>Регистрация</Button>
            <FavoriteBorderIcon />
            <ShoppingBasketIcon />
          </Toolbar>
        </Grid>
        <Grid item justifyContent="space-evenly" component="nav" container>
          {/* //TODO: Moving this map to a separate file */}
          {HEADERLINK.map((link) => (
            <Grid item key={link.name}>
              <Link href={link.link}>
                <Typography component="p">{link.name}</Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </AppBar>
  );
}

export default HeaderUi;
