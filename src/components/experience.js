import React from 'react';

class Experience extends React.Component {
  render() {
    return (
      <div className="experienceComponent">
        <h3>Experience</h3>
        <div class="experienceDiv">
          <label>Company Name</label>
          <input type="text" />
          <label>Position Title</label>
          <input type="text" />
          <label>From</label>
          <input type="text" />
          <label>To</label>
          <input type="text" />
        </div>
        <textarea id="textarea" />
        <div className="btnDiv">
          <button>Save</button>
          <button>Delete</button>
        </div>
        <button id="addExperience">Add</button>
      </div>
    );
  }
}

export default Experience;
