import React from 'react';
import Education from './components/education.js';
import Experience from './components/experience.js';
import General from './components/general.js';
import './styles/styles.css';
// MUI Bellow
import {Typography, Container, Button} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import {createTheme, ThemeProvider} from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ffac1e',
    },
    secondary: {
      main: '#3cff66',
    },
  },
  typography: {
    fontFamily: ['Times New Roman', 'Arial', 'sans-serif'].join(','),
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md" sx={{backgroundColor: 'primary.main'}}>
        <Typography variant="h1" sx={{textAlign: 'center', margin: '20px 0px'}}>
          CV App
        </Typography>
        <General />
        <Education />
        <Experience />
        <Button
          id="printbtn"
          variant="contained"
          size="large"
          startIcon={<PrintIcon />}
          color="secondary"
          sx={{mx: 'auto', display: 'flex'}}
          onClick={() => {
            window.print();
          }}
        >
          Print
        </Button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
