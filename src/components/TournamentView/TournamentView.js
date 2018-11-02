import React, { Component } from "react";
import PropTypes from "prop-types";
import ScoreList from "../ScoreList/ScoreList";
import "./TournamentView.css";
import PlayerList from "../PlayerList/PlayerList";
import TournamentInfo from "../TournamentInfo/TournamentInfo";
import JoinTournamentForm from "../JoinTournamentForm/JoinTournamentForm";
class TournamentView extends Component {
  state = {
    tournament: "",
    games: [],
    tournamentStatus: "",
    players: [],
    tournamentPlayers: [],
    tournamentId: null
  };

  static propTypes = {
    tournamentId: PropTypes.number
  };

  componentDidMount() {
    const tournamentsPromise = fetch("https://first-project-fe601.firebaseio.com/tournaments.json")
        .then(response => response.json())
        .then(tournaments => {
                    return Object.entries(tournaments || {})
                    .map(
                      ([id, value]) => ({
                        id,
                        ...value
                      })
                    );
                  });
    
    const playersPromise = fetch("https://first-project-fe601.firebaseio.com/players.json")
        .then(response => response.json())
        .then(players => {
          return Object.entries(players || {})
          .map(
            ([id, value]) => ({
              id,
              ...value
            })
          );
        });
    
    Promise.all([tournamentsPromise, playersPromise]).then(
        data => {
            const searchedTournament = data[0].find(tournament => tournament.id === this.props.location.state.tournamentId)
            const searchedTournamentPlayers = searchedTournament.playersIds.map(id => {
                return data[1].find(player => player.id === id)})
            this.setState({tournament:searchedTournament, players: data[1], games: searchedTournament.games, tournamentStatus: searchedTournament.status, tournamentPlayers: searchedTournamentPlayers})
    })
}

  render() {
    return (
      <div className="TournamentView-container">
        <TournamentInfo
          name={this.state.tournament.name}
          date={this.state.tournament.date}
          address={this.state.tournament.address}
          status={this.state.tournament.status}
          placesAvailable={this.state.tournament.placesAvailable}
          placesOccupied={this.state.tournament.placesOccupied}
          image={this.state.tournament.image}
        />
        {this.state.tournamentStatus === "future" ? (
          <div className="PlayerList">
            <PlayerList
              tournamentPlayers={this.state.tournamentPlayers}
              playerListHeader={"Players taking part"}
            />{" "}
            {this.state.tournamentPlayers.length < 8 ? (
            <div className="JoinTournament-container">
              <h1>Join Tournament</h1>
              <JoinTournamentForm tournamentId={this.props.location.state.tournamentId} tournamentPlayers={this.state.tournamentPlayers}/>{" "}
            </div>
            ) : (<div></div>)}
          </div>
        ) : (
          <ScoreList games={this.state.games} players={this.state.players} />
        )}
      </div>
    );
  }
}

export default TournamentView;
