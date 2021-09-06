import React from 'react';
import styled from 'styled-components';

const EdInfo = styled.div`
  margin: auto;
  width: 400px;
  display: none;
`;
const EducationComponent = styled.div`
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
    document.getElementById('saveEd').style.display = 'none';
    document.getElementById('ed_Info').style.display = 'block';
    document.getElementById('ed_form').style.display = 'none';
  };

  add = () => {
    let element = <Info />;
    let thing = document.getElementById('educationDiv');
    document.createElement(element);
    thing.appendChild(element);
  };
  render() {
    return (
      <EducationComponent className="educationComponent">
        <h3>Education</h3>
        <div className="educationDiv" id="educationDiv">
          <Form className="ed_form" id="ed_form">
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
          </Form>
        </div>

        <Info
          school={this.state.school}
          study={this.state.study}
          from={this.state.from}
          to={this.state.to}
        />

        <Button id="saveEd" onClick={this.displayInfo}>
          Save
        </Button>
      </EducationComponent>
    );
  }
}

function Info(props) {
  return (
    <EdInfo className="ed_Info" id="ed_Info">
      <p>School Name: {props.school}</p>
      <p>Area of Study: {props.study}</p>
      <p>From: {props.from}</p>
      <p>To: {props.to}</p>
      <Button
        id="editBTN"
        onClick={() => {
          document.getElementById('saveEd').style.display = 'block';
          document.getElementById('ed_Info').style.display = 'none';
          document.getElementById('ed_form').style.display = 'grid';
        }}
      >
        Edit
      </Button>
    </EdInfo>
  );
}
export default Education;
