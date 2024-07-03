import type { SxProps } from '@mui/material';

export const card = (size: string): SxProps => ({
  width: size === 'small' ? 224 : 244,
  height: 399,
  borderRadius: 0,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

export const favButton = (size: string): SxProps => ({
  position: 'absolute',
  top: size === 'small' ? '0.375rem' : '0.5rem',
  right: size === 'small' ? '0.375rem' : '0.5rem',
  width: '1.5rem',
  height: '1.5rem',
});

export const image = (size: string): SxProps => ({
  height: '14.625rem',
  padding: size === 'small' ? '0.75rem' : '1.25rem',
  objectFit: 'contain',
  width: `calc(100% - ${size === 'small' ? '1.5rem' : '2.5rem'})`,
  aspectRatio: 1,
});
