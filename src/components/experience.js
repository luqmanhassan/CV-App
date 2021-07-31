import React from 'react';

class Experience extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company: null,
      position: null,
      from: null,
      to: null,
      tasks: null,
    };
  }
  displayInfo = (ev) => {
    //ev.target.style.display = 'none';
    document.getElementById('saveExp').style.display = 'none';
    document.getElementById('exp_editBTN').style.display = 'block';
    document.getElementById('exp_Info').style.display = 'block';
    document.getElementById('experienceDiv').style.display = 'none';
    document.getElementById('textarea').style.display = 'none';
  };
  render() {
    return (
      <div className="experienceComponent">
        <h3>Experience</h3>
        <div className="experienceDiv" id="experienceDiv">
          <label>Company Name</label>
          <input
            type="text"
            onChange={(ev) => {
              this.setState({company: ev.target.value});
            }}
            placeholder="Company Name"
          />
          <label>Position Title</label>
          <input
            type="text"
            onChange={(ev) => {
              this.setState({position: ev.target.value});
            }}
            placeholder="Posiiton Title"
          />
          <label>From</label>
          <input
            type="date"
            onChange={(ev) => {
              this.setState({from: ev.target.value});
            }}
            required
          />
          <label>To</label>
          <input
            type="date"
            onChange={(ev) => {
              this.setState({to: ev.target.value});
            }}
            required
          />
        </div>
        <textarea id="textarea" placeholder="Main Tasks" />

        <Info
          company={this.state.company}
          position={this.state.position}
          from={this.state.from}
          to={this.state.to}
          tasks={this.state.tasks}
        />

        <div className="btnDiv">
          <button id="saveExp" onClick={this.displayInfo}>
            Save
          </button>
          <button
            id="exp_editBTN"
            onClick={() => {
              document.getElementById('saveExp').style.display = 'block';
              document.getElementById('exp_editBTN').style.display = 'none';
              document.getElementById('exp_Info').style.display = 'none';
              document.getElementById('experienceDiv').style.display = 'grid';
              document.getElementById('textarea').style.display = 'block';
            }}
          >
            Edit
          </button>
          {/* <button id="deleteBTN">Delete</button>*/}
        </div>
        {/*<button id="addExperience">Add</button>*/}
      </div>
    );
  }
}

function Info(props) {
  return (
    <div className="exp_Info" id="exp_Info">
      <p>Company: {props.company}</p>
      <p>Position: {props.position}</p>
      <p>From: {props.from}</p>
      <p>To: {props.to}</p>
      <p>Main Tasks: {props.tasks}</p>
    </div>
  );
}

export default Experience;
