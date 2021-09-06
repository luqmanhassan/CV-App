import React from 'react';
import styled from 'styled-components';
const GenInfo = styled.div`
  margin: auto;
  width: 400px;
  display: none;
`;
const GeneralComponent = styled.div`
  margin: 20px 0;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
`;

const Button = styled.button`
  margin: 0px auto;
  display: block;
  padding: 5px 15px;
  border: 3px solid black;

  &:hover {
    background-color: black;
    color: white;
    cursor: pointer;
  }
`;

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
      <GeneralComponent class="generalComponent">
        <h3>General Info</h3>
        <Form className="generalDiv" id="generalDiv">
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
        </Form>
        <Info
          fname={this.state.fname}
          lname={this.state.lname}
          email={this.state.email}
          phone={this.state.phone}
        />
        <Button id="saveGeneral" onClick={this.displayInfo}>
          Save
        </Button>
      </GeneralComponent>
    );
  }
}

function Info(props) {
  return (
    <GenInfo className="gen_Info" id="gen_Info">
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
    </GenInfo>
  );
}

export default General;
