import React from 'react';

class General extends React.Component {
  render() {
    return (
      <div class="generalComponent">
        <h3>General Info</h3>
        <div className="generalDiv">
          <label>First Name</label>
          <input type="text" id="firstName_input" />
          <label>Last Name</label>
          <input type="text" id="lastName_input" />
          <label>Email</label>
          <input type="text" id="email_input" />
          <label>Phone #</label>
          <input type="text" id="phone_input" />
        </div>
        <button id="saveGeneral">Save</button>
      </div>
    );
  }
}
export default General;
