import React from 'react';
import {Typography, Container, Button, TextField, Stack} from '@mui/material';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: null, lname: null, email: null, phone: null};
  }

  render() {
    return (
      <Container maxWidth="lg" class="generalComponent">
        <Typography variant="h5">General Info</Typography>
        <Stack
          component="form"
          className="generalDiv"
          id="generalDiv"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}
        >
          <TextField
            label="First Name"
            variant="outlined"
            size="small"
            id="firstName_input"
            onChange={(ev) => {
              this.setState({fname: ev.target.value});
            }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            size="small"
            id="lastName_input"
            onChange={(ev) => {
              this.setState({lname: ev.target.value});
            }}
          />
          <TextField
            label="Email"
            variant="outlined"
            size="small"
            id="email_input"
            onChange={(ev) => {
              this.setState({email: ev.target.value});
            }}
          />
          <TextField
            label="Number"
            variant="outlined"
            size="small"
            id="phone_input"
            onChange={(ev) => {
              this.setState({phone: ev.target.value});
            }}
          />
        </Stack>
        <Info
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Button
          variant="contained"
          id="saveGeneral"
          onClick={(ev) => {
            ev.target.style.display = 'none';
            document.getElementById('gen_Info').style.display = 'flex';
            document.getElementById('generalDiv').style.display = 'none';
            document.getElementById('editBTN').style.display = 'block';
          }}
          sx={{
            marginLeft: '50%',
            marginRight: '50%',
          }}
        >
          Save
        </Button>
        <Button
          id="editBTN"
          variant="contained"
          onClick={(ev) => {
            ev.target.style.display = 'none';
            document.getElementById('generalDiv').style.display = 'flex';
            document.getElementById('gen_Info').style.display = 'none';
            document.getElementById('saveGeneral').style.display = 'block';
          }}
          sx={{
            display: 'none',
            marginLeft: '50%',
            marginRight: '50%',
          }}
        >
          Edit
        </Button>
      </Container>
    );
  }
}

function Info(props) {
  return (
    <Stack
      maxWidth="lg"
      className="gen_Info"
      id="gen_Info"
      spacing={2}
      sx={{
        display: 'none',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
      }}
    >
      <Typography variant="body1">First Name: {props.fname}</Typography>
      <Typography variant="body1">Last Name: {props.lname}</Typography>
      <Typography variant="body1">Email: {props.email}</Typography>
      <Typography variant="body1">Phone #: {props.phone}</Typography>
    </Stack>
  );
}

export default General;
