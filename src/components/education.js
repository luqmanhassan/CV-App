import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {school: null, study: null, from: null, to: null};
  }
  displayInfo = (ev) => {
    ev.target.style.display = 'none';
    // document.getElementById('deleteBTN').style.display = 'none';
    document.getElementById('ed_Info').style.display = 'block';
    document.getElementById('educationDiv').style.display = 'none';
  };
  render() {
    return (
      <div className="educationComponent">
        <h3>Education</h3>
        <div className="educationDiv" id="educationDiv">
          <label>School Name</label>
          <input
            type="text"
            onChange={(ev) => {
              this.setState({school: ev.target.value});
            }}
          />
          <label>Area of Study</label>
          <input
            type="text"
            onChange={(ev) => {
              this.setState({study: ev.target.value});
            }}
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
        <div className="btnDiv">
          <button id="saveEd" onClick={this.displayInfo}>
            Save
          </button>
          {/*<button id="deleteBTN">Delete</button>*/}
        </div>

        <Info
          school={this.state.school}
          study={this.state.study}
          from={this.state.from}
          to={this.state.to}
        />
        {/*<button id="addEducation">Add</button>*/}
      </div>
    );
  }
}

function Info(props) {
  return (
    <div className="ed_Info" id="ed_Info">
      <p>School Name: {props.school}</p>
      <p>Area of Study: {props.study}</p>
      <p>From: {props.from}</p>
      <p>To: {props.to}</p>
      <button
        id="editBTN"
        onClick={() => {
          document.getElementById('saveEd').style.display = 'block';
          // document.getElementById('deleteBTN').style.display = 'block';

          document.getElementById('ed_Info').style.display = 'none';
          document.getElementById('educationDiv').style.display = 'grid';
        }}
      >
        Edit
      </button>
    </div>
  );
}
export default Education;
