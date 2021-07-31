import React from 'react';

class Education extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      school: null,
      study: null,
      from: null,
      to: null,
      clickedAdd: null,
    };
  }
  displayInfo = (ev) => {
    // ev.target.style.display = 'none';
    // document.getElementById('deleteBTN').style.display = 'none';
    document.getElementById('saveEd').style.display = 'none';
    document.getElementById('ed_Info').style.display = 'block';
    document.getElementById('ed_form').style.display = 'none';
    // document.getElementById('editBTN').style.display = 'block';
  };

  add = () => {
    // this.setState({clickedAdd: true});
    let element = <Info />;
    let thing = document.getElementById('educationDiv');
    document.createElement(element);
    thing.appendChild(element);
  };
  render() {
    return (
      <div className="educationComponent">
        <h3>Education</h3>
        <div className="educationDiv" id="educationDiv">
          <form className="ed_form" id="ed_form">
            <label>School Name</label>
            <input
              type="text"
              onChange={(ev) => {
                this.setState({school: ev.target.value});
              }}
              placeholder="School Name"
            />
            <label>Area of Study</label>
            <input
              type="text"
              onChange={(ev) => {
                this.setState({study: ev.target.value});
              }}
              placeholder="Area of Study"
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
            />
          </form>
        </div>

        <Info
          school={this.state.school}
          study={this.state.study}
          from={this.state.from}
          to={this.state.to}
        />

        <button id="saveEd" onClick={this.displayInfo}>
          Save
        </button>

        {/*
        <div>
          <button id="addEducation" onClick={this.add}>
            Add
          </button>
          <button id="deleteBTN">Delete</button>
        </div>*/}
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
          document.getElementById('ed_form').style.display = 'grid';
        }}
      >
        Edit
      </button>
    </div>
  );
}
export default Education;
