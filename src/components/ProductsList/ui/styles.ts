import type { SxProps } from '@mui/material';

export const list = (size: string): SxProps => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${size === 'medium' ? '224px' : '244px'}, 1fr))`,
  gap: '1.5rem',
  justifyItems: 'center',
  width: '100%',
  listStyle: 'none',
  padding: 0,
  margin: 0,
});
