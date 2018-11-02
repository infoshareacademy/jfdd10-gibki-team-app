import React, { Component } from "react";
import firebase from "firebase";
import PropTypes from "prop-types";
import ScoreList from "../ScoreList/ScoreList";
import "./TournamentView.css";
import PlayerList from "../PlayerList/PlayerList";
import TournamentInfo from "../TournamentInfo/TournamentInfo";
import JoinTournamentForm from "../JoinTournamentForm/JoinTournamentForm";
import firebase from "firebase";
class TournamentView extends Component {
  state = {
    tournament: null,
    games: [],
    tournamentStatus: "",
    players: null,
    tournamentPlayers: [],
    tournamentId: null
  };

  static propTypes = {
    tournamentId: PropTypes.number
  };

  processTournament = snapshot => {
    const tournament = snapshot.val();
    this.setState({
      tournament: tournament && { id: this.props.torunamentId, ...tournament }
    });
  };

  processPlayers = snapshot => {
    const players = snapshot.val();

    this.setState({
      players
    });
  };

  objectToArray = object => Object.entries(object || {}).map(([id, value]) => ({
    id,
    ...value
  }))

  componentDidMount() {
    firebase
      .database()
      .ref("tournaments")
      .child(this.props.match.params.tournamentId)
      .on("value", this.processTournament);

    firebase
      .database()
      .ref("players")
      .on("value", this.processPlayers);
  }

  render() {
    const tournament = this.state.tournament;
    const players = this.state.players;
    if (!tournament || !players) {
      return <p>loading tournament and players...</p>;
    }
    const tournamentPlayers =
      (tournament.playersIds &&
        tournament.playersIds.map(playerId => ({ 
          id: playerId, 
          ...players[playerId] 
        }))) || [];
    return (
      <div className="TournamentView-container">
        <TournamentInfo {...tournament} />
        {tournament.status === "future" ? (
          <div className="PlayerList">
            <PlayerList
              tournamentPlayers={tournamentPlayers}
              playerListHeader={"Players taking part"}
            />{" "}
            {tournamentPlayers.length < 8 ? (
              <div className="JoinTournament-container">
                <h1>Join Tournament</h1>
                <JoinTournamentForm
                  tournamentId={this.props.match.params.tournamentId}
                  tournamentPlayers={tournamentPlayers}
                />{" "}
              </div>
            ) : (
              <div />
            )}
          </div>
        ) : (
          <ScoreList
            games={(tournament && tournament.games) || []}
            players={tournamentPlayers}
          />
        )}
      </div>
    );
  }
}

export default TournamentView;
