import React, { Component } from "react";
import PropTypes from "prop-types";
import ScoreList from "../ScoreList/ScoreList";
import "./TournamentView.css";

class TournamentView extends Component {
  state = {
    tournament: null,
    games: [],
    tournamentStatus: "",
    players: []
  };

  static propTypes = {
    tournamentId: PropTypes.number.isRequired
  };

  componentDidMount() {
    const tournamentsPromise = fetch(
      process.env.PUBLIC_URL + "/data/tournaments.json"
    ).then(response => response.json());

    const playersPromise = fetch(
      process.env.PUBLIC_URL + "/data/players.json"
    ).then(response => response.json());

    Promise.all([tournamentsPromise, playersPromise]).then(data => {
      const searchedTournament = data[0].find(
        tournament => tournament.id === this.props.tournamentId
      );
      this.setState({
        tournament: searchedTournament,
        players: data[1],
        games: searchedTournament.games,
        tournamentStatus: searchedTournament.status
      });
    });
  }

  render() {
    return (
      <div className="TournamentView-container">
        {/* <TournamentInfo/> */}
        {this.state.tournamentStatus === "future" ? (
          "PlayerList component"
        ) : (
          <ScoreList games={this.state.games} players={this.state.players} />
        )}
      </div>
    );
  }
}

export default TournamentView;
