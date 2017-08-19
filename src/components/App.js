import React, { Component } from 'react';
import Table from './table_container';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Table title="Winnie" id="1" color="#8E6E95" />
        <Table title="Bob" id="2" color="#39A59C" />
        <Table title="Thomas" id="3" color="#344759" />
        <Table title="George" id="4" color="#E8741E" />
      </div>
    );
  }
}

export default App;
