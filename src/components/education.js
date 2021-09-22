import React from 'react';
import {Typography, Grid, Button, TextField} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: null,
      study: null,
      from: '10/15/2021',
      to: '10/15/2021',
    };
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
            Education
          </Typography>
        </Grid>

        <Grid
          item
          container
          component="form"
          className="ed_form"
          id="ed_form"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <TextField
              label="School Name"
              sx={{bgcolor: 'white'}}
              variant="outlined"
              size="small"
              onChange={(ev) => {
                this.setState({school: ev.target.value});
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Area of Study"
              sx={{bgcolor: 'white'}}
              variant="outlined"
              size="small"
              onChange={(ev) => {
                this.setState({study: ev.target.value});
              }}
            />
          </Grid>
          <Grid item>
            <DatePicker
              label="From"
              value={this.state.from}
              onChange={(date) => {
                let d =
                  date.getMonth() +
                  '/' +
                  date.getDate() +
                  '/' +
                  date.getFullYear();
                this.setState({from: d});
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid item>
            <DatePicker
              label="To"
              value={this.state.to}
              onChange={(date) => {
                let d =
                  date.getMonth() +
                  '/' +
                  date.getDate() +
                  '/' +
                  date.getFullYear();
                this.setState({to: d});
              }}
              renderInput={(params) => <TextField {...params} />}
              sx={{backgroundColor: 'white'}}
            />
          </Grid>
        </Grid>

        <Info
          school={this.state.school}
          study={this.state.study}
          from={this.state.from}
          to={this.state.to}
        />

        <Grid item align="center">
          <Button
            id="saveEd"
            onClick={() => {
              document.getElementById('saveEd').style.display = 'none';
              document.getElementById('ed_Info').style.display = 'flex';
              document.getElementById('ed_form').style.display = 'none';
              document.getElementById('editBTN').style.display = 'flex';
            }}
            variant="contained"
            color="secondary"
            size="small"
          >
            Save
          </Button>
        </Grid>

        <Grid item align="center">
          <Button
            id="editBTN"
            variant="contained"
            color="secondary"
            onClick={(ev) => {
              ev.target.style.display = 'none';
              document.getElementById('saveEd').style.display = 'flex';
              document.getElementById('ed_Info').style.display = 'none';
              document.getElementById('ed_form').style.display = 'flex';
            }}
            size="small"
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
      className="ed_Info"
      id="ed_Info"
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
          School Name: {props.school}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          Area of Study: {props.study}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          From: {props.from}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography variant="body1" sx={{backgroundColor: 'white', p: '10px'}}>
          To: {props.to}
        </Typography>
      </Grid>
    </Grid>
  );
}
export default Education;
