import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: null, lname: null, email: null, phone: null};
  }

  savee = (ev) => {
    ev.target.style.display = 'none';
    document.getElementById('infoDiv').style.display = 'block';
    document.getElementById('generalDiv').style.display = 'none';
    // this.displayInfo();
  };

  displayInfo = (ev) => {
    return <p>First Name: {this.state.fname}</p>;
  };

  render() {
    return (
      <div class="generalComponent">
        <h3>General Info</h3>
        <div className="generalDiv" id="generalDiv">
          <label>First Name</label>
          <input
            type="text"
            id="firstName_input"
            onChange={(ev) => {
              this.setState({fname: ev.target.value});
            }}
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lastName_input"
            onChange={(ev) => {
              this.setState({lname: ev.target.value});
            }}
          />
          <label>Email</label>
          <input
            type="text"
            id="email_input"
            onChange={(ev) => {
              this.setState({email: ev.target.value});
            }}
          />
          <label>Phone #</label>
          <input
            type="text"
            id="phone_input"
            onChange={(ev) => {
              this.setState({phone: ev.target.value});
            }}
          />
        </div>
        <button id="saveGeneral" onClick={this.savee}>
          Save
        </button>
        <Info
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          phone={this.state.phone}
        />
      </div>
    );
  }
}

function Info(props) {
  return (
    <div className="infoDiv" id="infoDiv">
      <p>First Name: {props.fname}</p>
      <p>Last Name: {props.lname}</p>
      <p>Email: {props.email}</p>
      <p>Phone #: {props.phone}</p>
      <button
        id="editBTN"
        onClick={() => {
          document.getElementById('generalDiv').style.display = 'grid';
          document.getElementById('infoDiv').style.display = 'none';
          document.getElementById('saveGeneral').style.display = 'block';
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default General;
