import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    background: {
      default: '#E1DDC7',
    },
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#64614c',
    },
    info: {
      main: '#4d7bbe'
    },
    error: {
      main: '#532c25',
    },
    warning: {
      main: '#d85029'
    }
  },
});

export default theme;
