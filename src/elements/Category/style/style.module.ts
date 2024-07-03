import type { SxProps } from '@mui/material';

export const card = (imageurl: string): SxProps => ({
  width: '26.5rem',
  height: '13.75rem',
  paddingLeft: '2.5rem',
  paddingRight: '1.875rem',
  backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${imageurl})`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  textDecoration: 'none',
});

export const icon: SxProps = {
  width: '2.875rem',
  height: '2.875rem',
  position: 'absolute',
  right: '1.25rem',
  bottom: '1.25rem',
};
