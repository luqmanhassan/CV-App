import React from 'react';

class Education extends React.Component {
  render() {
    return (
      <div className="educationComponent">
        <h3>Education</h3>
        <div className="educationDiv">
          <label>School Name</label>
          <input type="text" />
          <label>Area of Study</label>
          <input type="text" />
          <label>From</label>
          <input type="text" />
          <label>To</label>
          <input type="text" />
        </div>
        <div className="btnDiv">
          <button>Save</button>
          <button>Delete</button>
        </div>
        <button id="addEducation">Add</button>
      </div>
    );
  }
}
export default Education;
