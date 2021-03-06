import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import PlayerList from "../PlayerList/PlayerList";
import AuthComponent from '../AuthComponent/AuthComponent';
import "./PlayersView.css";
import Button from "@material-ui/core/Button";
class PlayersView extends Component {
  state = {
    players: [],
    user: null
  };

  componentDidMount() {
    fetch("https://first-project-fe601.firebaseio.com/players.json")
      .then(response => response.json())
      .then(players => {
        const arrayOfPlayers = Object.entries(players || {}).map(
          ([id, value]) => ({
            id,
            ...value
          })
        );
        this.setState({ players: arrayOfPlayers });
      });
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return (
      <div>
        <header className="playersView-Header">
          <div className="playersView-top-row">
          <div>
          <strong>
                  <p style={{ margin: '0px' }}>
                    <Button>
                      <Link to="/">Home</Link>
                    </Button>
                  
          {this.state.user ? (<Button>
            <Link
              to={{
                pathname: `/PlayerView/${this.state.user.uid}`,
                state: { playerId: this.state.user.uid }
              }}
              >
              My profile
            </Link>
         </Button>) : ("")}
         </p>
                </strong>
         </div>
                
        <div><AuthComponent /></div>
          </div>
          <div className="playersView-container">
            <h1 className="playersView-h1">All Players</h1>
            <div className="playersView-img-container">
              <img
                className="playersView-avatar"
                src="./purple-avatar.png"
                alt=""
              />
              <img
                className="playersView-avatar"
                src="./blue-avatar.png"
                alt=""
              />
              <img
                className="playersView-avatar"
                src="./green-avatar.png"
                alt=""
              />
              <img
                className="playersView-avatar"
                src="./yellow-avatar.png"
                alt=""
              />
              <img
                className="playersView-avatar"
                src="./orange-avatar.png"
                alt=""
              />
              <img
                className="playersView-avatar"
                src="./red-avatar.png"
                alt=""
              />
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
