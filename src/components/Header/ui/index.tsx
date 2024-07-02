import {
  Box,
  Button,
  Grid,
  InputBase,
  Link,
  Typography,
  Modal,
  Stack,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import logoPath from '../../../images/svg/logo.svg';
import HEADERLINK from '../../../utils/constant/headerLink';
import { AuthWidget } from '../../AuthWidget';

interface IHeaderUi {
  isSignedIn: boolean;
  isAuthOpen: boolean;
  handleAuthOpen: () => void;
  handleAuthClose: () => void;
}

function HeaderUi({
  isSignedIn,
  isAuthOpen,
  handleAuthClose,
  handleAuthOpen,
}: IHeaderUi) {
  return (
    <Box component="header">
      <Grid direction="column" container>
        <Grid item>
          <Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Stack direction="row" alignItems="center">
                <Link href="#">
                  <img src={logoPath} alt="Логотип сайта." />
                </Link>
                <SearchIcon />
                <InputBase placeholder="Поиск" />
              </Stack>
              <Stack direction="row" alignItems="center">
                {!isSignedIn ? (
                  <Button
                    variant="contained"
                    type="button"
                    onClick={handleAuthOpen}
                  >
                    Вход
                  </Button>
                ) : (
                  <Button variant="contained" type="button">
                    Инвестиции в искусство
                  </Button>
                )}
                <FavoriteBorderIcon />
                <ShoppingBasketIcon />
              </Stack>
            </Stack>
          </Stack>
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
      <Modal
        open={isAuthOpen}
        onClose={handleAuthClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            maxWidth: '54.5rem',
            backgroundColor: 'white',
            padding: '2.5rem',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <AuthWidget onSuccess={handleAuthClose} />
        </Box>
      </Modal>
    </Box>
  );
}

export default HeaderUi;
