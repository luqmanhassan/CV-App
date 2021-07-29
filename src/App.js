// import React, {Component} from 'react';
import React from 'react';
import Education from './components/education.js';
import Experience from './components/experience.js';
import General from './components/general.js';
import './styles/styles.css';

function App() {
  return (
    <div className="main">
      <h1>CV APP</h1>
      <General />
      <Education />
      <Experience />
      <button id="printbtn">Print</button>
    </div>
  );
}

export default App;
