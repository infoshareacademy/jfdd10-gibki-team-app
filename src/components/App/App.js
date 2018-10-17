import React, { Component } from 'react';
import TournamentView from '../TournamentView/TournamentView'
import PlayerView from '../PlayerView/PlayerView'
import HomeView from "../HomeView/HomeView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TournamentView tournamentId={1}/>
        <PlayerView playerId={1}/>
        <TournamentView tournamentId={2} />
        <HomeView />
      </div>
    );
  }
}

export default App;
