import React from 'react';
import {Typography, Button, TextField, Grid} from '@mui/material';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: null, lname: null, email: null, phone: null};
  }

  render() {
    return (
      <Grid item container direction="column" spacing={4}>
        <Grid item>
          <Typography
            variant="h5"
            align="center"
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: '5px',
            }}
          >
            General
          </Typography>
        </Grid>

        <Grid
          item
          container
          component="form"
          className="generalDiv"
          id="generalDiv"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <TextField
              label="First Name"
              variant="outlined"
              size="small"
              id="firstName_input"
              onChange={(ev) => {
                this.setState({fname: ev.target.value});
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Last Name"
              variant="outlined"
              size="small"
              id="lastName_input"
              onChange={(ev) => {
                this.setState({lname: ev.target.value});
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Email"
              variant="outlined"
              size="small"
              id="email_input"
              onChange={(ev) => {
                this.setState({email: ev.target.value});
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Number"
              variant="outlined"
              size="small"
              id="phone_input"
              onChange={(ev) => {
                this.setState({phone: ev.target.value});
              }}
            />
          </Grid>
        </Grid>

        <Info
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Grid item align="center">
          <Button
            variant="contained"
            id="saveGeneral"
            size="small"
            onClick={(ev) => {
              ev.target.style.display = 'none';
              document.getElementById('gen_Info').style.display = 'flex';
              document.getElementById('generalDiv').style.display = 'none';
              document.getElementById('editGeneral').style.display = 'flex';
            }}
            color="secondary"
          >
            Save
          </Button>
        </Grid>
        <Grid item align="center">
          <Button
            id="editGeneral"
            variant="contained"
            size="small"
            color="secondary"
            onClick={(ev) => {
              ev.target.style.display = 'none';
              document.getElementById('generalDiv').style.display = 'flex';
              document.getElementById('gen_Info').style.display = 'none';
              document.getElementById('saveGeneral').style.display = 'flex';
            }}
            sx={{
              display: 'none',
            }}
          >
            Edit
          </Button>
        </Grid>
      </Grid>
    );
  }
}

function Info(props) {
  return (
    <Grid
      item
      container
      className="gen_Info"
      id="gen_Info"
      spacing={2}
      direction="column"
      sx={{
        display: 'none',
        justifyContent: 'center',
        my: '10px',
      }}
    >
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          First Name: {props.fname}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          Last Name: {props.lname}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          Email: {props.email}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          Phone: {props.phone}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default General;
