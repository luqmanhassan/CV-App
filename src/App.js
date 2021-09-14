import React from 'react';
import Education from './components/education.js';
import Experience from './components/experience.js';
import General from './components/general.js';
import './styles/styles.css';
// MUI Bellow
import {Typography, Container, Button} from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';

function App() {
  return (
    <Container maxWidth="md">
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
        color="primary"
        sx={{display: 'flex', justifyContent: 'center'}}
        onClick={() => {
          window.print();
        }}
      >
        Print
      </Button>
    </Container>
  );
}

export default App;
