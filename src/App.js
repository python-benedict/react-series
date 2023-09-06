import React, { Children, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RefsDemo from './components/RefsDemo';

function App() {
  return (
    <div className="App">
    <RefsDemo />
      {/* <Children1 heroName="Benedict" nickName="Sefa">
        <p>Hello love of my life</p>
        <div>Hello oay of my lie</div>
      </Children1> */}
    </div>
  );
}

export default App;
