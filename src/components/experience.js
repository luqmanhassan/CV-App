import React from 'react';
import styled from 'styled-components';

const ExpInfo = styled.div`
  margin: auto;
  width: 400px;
  display: none;
`;
const ExpComponent = styled.div`
  margin: 20px 0;
`;

const ExpDiv = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-around;
`;

const BTNDiv = styled.div`
  display: flex;
    justify-content: center;
    button {
      margin: 0px 10px;
        padding: 5px 15px;
  border: 3px solid black;
      &:hover {
        background-color: black;
  color: white;
  cursor: pointer;
      }
`;

const TextArea = styled.textarea`
  resize: vertical;
  width: 60%;
  margin: 10px auto;
  display: block;
  min-height: 50px;
  padding: 10px 20px;
`;

const EditBTN = styled.button`
  display: none;
`;

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
    document.getElementById('saveExp').style.display = 'none';
    document.getElementById('exp_editBTN').style.display = 'block';
    document.getElementById('exp_Info').style.display = 'block';
    document.getElementById('experienceDiv').style.display = 'none';
    document.getElementById('textarea').style.display = 'none';
  };
  render() {
    return (
      <ExpComponent className="experienceComponent">
        <h3>Experience</h3>
        <ExpDiv className="experienceDiv" id="experienceDiv">
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
        </ExpDiv>
        <TextArea id="textarea" placeholder="Main Tasks" />

        <Info
          company={this.state.company}
          position={this.state.position}
          from={this.state.from}
          to={this.state.to}
          tasks={this.state.tasks}
        />

        <BTNDiv className="btnDiv">
          <button id="saveExp" onClick={this.displayInfo}>
            Save
          </button>
          <EditBTN
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
          </EditBTN>
        </BTNDiv>
      </ExpComponent>
    );
  }
}

function Info(props) {
  return (
    <ExpInfo className="exp_Info" id="exp_Info">
      <p>Company: {props.company}</p>
      <p>Position: {props.position}</p>
      <p>From: {props.from}</p>
      <p>To: {props.to}</p>
      <p>Main Tasks: {props.tasks}</p>
    </ExpInfo>
  );
}

export default Experience;
