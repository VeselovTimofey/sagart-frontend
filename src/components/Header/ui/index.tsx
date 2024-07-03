import { Link as RouterLink } from 'react-router-dom';

import {
  Box,
  Button,
  Link,
  Modal,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';

import logoPath from '../../../images/logo.png';
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
    <Stack
      component="header"
      direction="column"
      gap={2}
      sx={{
        paddingX: '3.75rem',
        paddingTop: '1.25rem',
        borderBottom: 'solid 1px #D9D9D9',
      }}
      position="relative"
    >
      <Link position="absolute" left={60} top={21} sx={{ zIndex: 1 }}>
        <img src={logoPath} alt="Логотип сайта" width={56} height={70} />
      </Link>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ paddingTop: '1rem', paddingX: '1rem' }}
      >
        <Stack direction="row" alignItems="center">
          <TextField
            size="small"
            placeholder="Поиск"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            sx={{ backgroundColor: 'white', zIndex: 2 }}
          />
        </Stack>
        <Stack direction="row" alignItems="center" gap={2}>
          {!isSignedIn ? (
            <Button
              variant="contained"
              type="button"
              onClick={handleAuthOpen}
              sx={{ fontSize: '1rem' }}
              disableElevation
            >
              Вход
            </Button>
          ) : (
            <Button variant="contained" type="button" disableElevation>
              Инвестиции в искусство
            </Button>
          )}
          <Stack direction="row" gap={0.5}>
            <IconButton>
              <FavoriteBorderIcon />
            </IconButton>
            <IconButton>
              <ShoppingBasketIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        component="ul"
        direction="row"
        justifyContent="space-evenly"
        gap={2}
        sx={{ listStyle: 'none', padding: 0, margin: 0 }}
      >
        {HEADERLINK.map((link) => (
          <Box component="li" key={link.name} sx={{ padding: '1rem 1.25rem' }}>
            <Link
              component={RouterLink}
              to={link.link}
              sx={{ textDecoration: 'none' }}
            >
              {link.name}
            </Link>
          </Box>
        ))}
      </Stack>
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
    </Stack>
  );
}

export default HeaderUi;
