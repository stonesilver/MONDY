import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#E6EBF7',
    },
    secondary: {
      main: '#1D242E',
      light: '#283342',
      contrastText: '#ffcc00',
    },
    white: {
      main: '#FFFFFF',
    },
    red: {
      main: '#F0483E',
    },
    green: {
      main: '#01A768',
      teal: '#009099',
    },
    blue: {
      main: '#03A9F5',
    },
    yellow: {
      main: '#FED600',
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: 12,
  },
});
