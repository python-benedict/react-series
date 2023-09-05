import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBinding from './components/EventBinding';

function App() {
  return (
    <div className="App">
      <EventBinding />
      {/* <FunctionClick /> */}
      {/* <ClassClick /> */}
      {/* <Greet name="Jikla" heroName="Steve Jobs"/> */}
      {/* <Welcome name="Benedict" heroName="Linux"/> */}
    </div>
  );
}

export default App;
