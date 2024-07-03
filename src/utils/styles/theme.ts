import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#1F2020',
      contrastText: '#fff',
    },
    secondary: {
      main: '#A5A6A6',
      contrastText: '#fff',
    },
    info: {
      main: '#1677FF',
      contrastText: '#fff',
    },
    error: {
      main: '#ED1D00',
      contrastText: '#fff',
    },
    success: {
      main: '#009C5B',
      contrastText: '#fff',
    },
  },
  typography: {
    fontFamily: ['Inter', 'Arial', 'sans-serif'].join(','),
    h1: {
      fontSize: '4rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.2,
    },
    body2: {
      fontSize: '1.25rem',
      fontWeight: 500,
      lineHeight: 1.2,
    },
    button: {
      textTransform: 'none',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => `
          body {
          // width: 100%;
          background-color: white;
        }
        #root {
          width: 1440px;
          margin: 0 auto;
          text-rendering: optimizeLegibility;
        }
      `,
    },
  },
});
