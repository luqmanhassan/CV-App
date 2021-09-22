import React from 'react';
import Education from './components/education.js';
import Experience from './components/experience.js';
import General from './components/general.js';
import './styles/styles.css';
// MUI Bellow
import {Typography, Grid, Button} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateAdapter from '@mui/lab/AdapterDateFns';

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
      <LocalizationProvider dateAdapter={DateAdapter}>
        <Grid container direction="column" spacing={12}>
          <Grid item align="center">
            <Typography
              variant="h1"
              sx={{
                textShadow:
                  '5px 5px 5px black, 5px 0px 5px #3cff66, 0pc 10px 10px black',
                color: '#3cff66',
              }}
            >
              CV App
            </Typography>
          </Grid>

          <General />
          <Education />
          <Experience />

          <Grid item container>
            <Button
              id="printbtn"
              variant="contained"
              size="large"
              startIcon={<PrintIcon />}
              color="secondary"
              sx={{mx: 'auto', display: 'flex', mb: '50px'}}
              onClick={() => {
                window.print();
              }}
            >
              Print
            </Button>
          </Grid>
        </Grid>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
