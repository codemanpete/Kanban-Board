import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import ExampleContainer from './example_container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route component={ ExampleContainer }/>
      </div>
    );
  }
}

export default App;
