import React from 'react';
import Education from './components/education.js';
import Experience from './components/experience.js';
import General from './components/general.js';
import './styles/styles.css';
import styled from 'styled-components';

const Main = styled.div`
  border: 5px solid black;
  margin: 50px auto;
  max-width: 50%;
  padding: 5px;
`;

const H1 = styled.h1`
  text-decoration: underline;
  font-size: 50px;
  text-align: center;
`;

const BTN = styled.button`
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
function App() {
  return (
    <Main>
      <H1>CV APP</H1>
      <General />
      <Education />
      <Experience />
      <BTN
        id="printbtn"
        onClick={() => {
          window.print();
        }}
      >
        Print
      </BTN>
    </Main>
  );
}

export default App;
