import React, { Component } from 'react';
import logo from './logo.svg';

import TournamentList from "./components/TournamentList/TournamentList"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TournamentList/>
      </div>
    );
  }
}

export default App;
