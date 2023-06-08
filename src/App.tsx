import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import ProTip from './ProTip';
import Navigation from './components/Navigation';
import { ThemeProvider } from '@mui/system';

import theme from './theme';
import { Divider } from '@mui/material';
import HomePage from './components/Home';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth={ false }>
        <Navigation />
        <Divider sx={{ borderColor: '#035c30' }} />
        <HomePage />
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Material UI Vite.js example in TypeScript
          </Typography>
          <ProTip />
          <Copyright />
        </Box>
      </Container>
    </ThemeProvider>
  );
}
