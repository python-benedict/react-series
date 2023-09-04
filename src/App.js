import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      <Greet name="Jikla" heroName="Steve Jobs"/>
      <Welcome name="Benedict" heroName="Linux"/>
    </div>
  );
}

export default App;
