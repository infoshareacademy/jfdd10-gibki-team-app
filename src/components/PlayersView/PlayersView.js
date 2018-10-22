import React, { Component } from "react";
import { Link } from "react-router-dom";
import PlayerList from "../PlayerList/PlayerList";
import "./PlayersView.css";

class PlayersView extends Component {
  state = {
    players: []
  };

  componentDidMount() {
    fetch("/data/players.json")
      .then(response => response.json())
      .then(players => {
        const arrayOfPlayers = Object.keys(players).map(key => ({
          id: key,
          ...players[key]
        }));
        this.setState({ players: arrayOfPlayers });
      });
  }
  render() {
    return (
      <div>
        <header className="playersView-Header">
        <div className="playersView-top-row">
          <button className="Info-button">
            <Link to="/">Home</Link>
          </button>
          </div>
          <div className="playersView-container">
            <h1 className="playersView-h1">All Players</h1>
            <div className="playersView-img-container">
              <img className="playersView-avatar" src="./purple-avatar.png" />
              <img className="playersView-avatar" src="./blue-avatar.png" />
              <img className="playersView-avatar" src="./green-avatar.png" />
              <img className="playersView-avatar" src="./yellow-avatar.png" />
              <img className="playersView-avatar" src="./orange-avatar.png" />
              <img className="playersView-avatar" src="./red-avatar.png" />
            </div>
          </div>
        </header>
        <div className="playerView-list">

        <PlayerList
          tournamentPlayers={this.state.players}
          // playerListHeader={"Players"}
        />
        </div>
      </div>
    );
  }
}

export default PlayersView;
