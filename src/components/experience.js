import React from 'react';
import {Typography, Button, TextField, Grid} from '@mui/material';
import DatePicker from '@mui/lab/DatePicker';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
      position: null,
      from: '10/15/2021',
      to: '10/15/2021',
      tasks: null,
    };
  }

  render() {
    return (
      <Grid
        item
        container
        className="experienceComponent"
        direction="column"
        spacing={4}
      >
        <Grid item>
          <Typography
            variant="h5"
            align="center"
            sx={{
              backgroundColor: 'secondary.main',
              borderRadius: '5px',
            }}
          >
            Experience
          </Typography>
        </Grid>
        <Grid
          item
          container
          className="experienceDiv"
          id="experienceDiv"
          component="form"
          spacing={2}
          sx={{
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Grid item>
            <TextField
              label="Company Name"
              sx={{bgcolor: 'white'}}
              variant="outlined"
              size="small"
              onChange={(ev) => {
                this.setState({company: ev.target.value});
              }}
            />
          </Grid>

          <Grid item>
            <TextField
              label="Position Title"
              sx={{bgcolor: 'white'}}
              variant="outlined"
              size="small"
              onChange={(ev) => {
                this.setState({position: ev.target.value});
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
              sx={{color: 'white'}}
            />
          </Grid>
        </Grid>
        <Grid item id="textarea" align="center">
          <TextField
            onChange={(ev) => {
              this.setState({tasks: ev.target.value});
            }}
            placeholder="Main Tasks"
            sx={{width: '30%'}}
          />
        </Grid>

        <Info
          company={this.state.company}
          position={this.state.position}
          from={this.state.from}
          to={this.state.to}
          tasks={this.state.tasks}
        />
        <Grid item align="center">
          <Button
            id="saveExp"
            onClick={() => {
              document.getElementById('saveExp').style.display = 'none';
              document.getElementById('exp_editBTN').style.display = 'flex';
              document.getElementById('exp_Info').style.display = 'flex';
              document.getElementById('experienceDiv').style.display = 'none';
              document.getElementById('textarea').style.display = 'none';
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
            id="exp_editBTN"
            onClick={() => {
              document.getElementById('saveExp').style.display = 'flex';
              document.getElementById('exp_editBTN').style.display = 'none';
              document.getElementById('exp_Info').style.display = 'none';
              document.getElementById('experienceDiv').style.display = 'flex';
              document.getElementById('textarea').style.display = 'block';
            }}
            sx={{display: 'none'}}
            variant="contained"
            color="secondary"
            size="small"
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
      container
      item
      className="exp_Info"
      id="exp_Info"
      spacing={2}
      direction="column"
      sx={{
        display: 'none',
        justifyContent: 'center',
        my: '10px',
      }}
    >
      <Grid item mx="30%">
        <Typography sx={{backgroundColor: 'white', p: '10px'}}>
          Company: {props.company}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography sx={{backgroundColor: 'white', p: '10px'}}>
          Position: {props.position}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography sx={{backgroundColor: 'white', p: '10px'}}>
          From: {props.from}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography sx={{backgroundColor: 'white', p: '10px'}}>
          To: {props.to}
        </Typography>
      </Grid>
      <Grid item mx="30%">
        <Typography sx={{backgroundColor: 'white', p: '10px'}}>
          Main Tasks: {props.tasks}
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Experience;
