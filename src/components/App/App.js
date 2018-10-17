import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import TournamentView from "../TournamentView/TournamentView";
import PlayerView from "../PlayerView/PlayerView";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <HomeView />
          <Route path="/" component={HomeView} />
          <Route path="/TournamentView" component={TournamentView} />
          <Route path="/PlayerView" component={PlayerView} />
        </div>
      </Router>
    );
  }
}

export default App;
