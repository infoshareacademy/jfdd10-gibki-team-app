import React, { Component } from 'react';
import TournamentView from '../TournamentView/TournamentView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TournamentView tournamentId={2}/>
      </div>
    );
  }
}

export default App;
