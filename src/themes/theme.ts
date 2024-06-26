import { createTheme, responsiveFontSizes  } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
let theme = createTheme({
  palette: {
    primary: {
      main: '#1b418c',
    },
    secondary: {
      main: '#75E1EB',
    },
    error: {
      main: red.A400,
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };