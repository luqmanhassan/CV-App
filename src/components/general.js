import React from 'react';

class General extends React.Component {
  constructor(props) {
    super(props);
    this.state = {fname: null, lname: null, email: null, phone: null};
  }

  displayInfo = (ev) => {
    ev.target.style.display = 'none';
    document.getElementById('gen_Info').style.display = 'block';
    document.getElementById('generalDiv').style.display = 'none';
  };

  render() {
    return (
      <div class="generalComponent">
        <h3>General Info</h3>
        <form className="generalDiv" id="generalDiv">
          <label>First Name</label>
          <input
            type="text"
            id="firstName_input"
            onChange={(ev) => {
              this.setState({fname: ev.target.value});
            }}
            placeholder="First Name"
          />
          <label>Last Name</label>
          <input
            type="text"
            id="lastName_input"
            onChange={(ev) => {
              this.setState({lname: ev.target.value});
            }}
            placeholder="Last Name"
          />
          <label>Email</label>
          <input
            type="text"
            id="email_input"
            onChange={(ev) => {
              this.setState({email: ev.target.value});
            }}
            placeholder="Email"
          />
          <label>Phone #</label>
          <input
            type="text"
            id="phone_input"
            onChange={(ev) => {
              this.setState({phone: ev.target.value});
            }}
            placeholder="Phone #"
          />
        </form>
        <Info
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          phone={this.state.phone}
        />
        <button id="saveGeneral" onClick={this.displayInfo}>
          Save
        </button>
      </div>
    );
  }
}

function Info(props) {
  return (
    <div className="gen_Info" id="gen_Info">
      <p>First Name: {props.fname}</p>
      <p>Last Name: {props.lname}</p>
      <p>Email: {props.email}</p>
      <p>Phone #: {props.phone}</p>
      <button
        id="editBTN"
        onClick={() => {
          document.getElementById('generalDiv').style.display = 'grid';
          document.getElementById('gen_Info').style.display = 'none';
          document.getElementById('saveGeneral').style.display = 'block';
        }}
      >
        Edit
      </button>
    </div>
  );
}

export default General;
