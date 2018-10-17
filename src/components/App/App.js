import React, { Component } from 'react';
import TournamentView from '../TournamentView/TournamentView'
import PlayerView from '../PlayerView/PlayerView'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TournamentView tournamentId={1}/>
        <PlayerView playerId={1}/>
      </div>
    );
  }
}

export default App;
