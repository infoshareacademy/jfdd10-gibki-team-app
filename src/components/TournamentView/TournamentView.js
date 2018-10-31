import React, { Component } from "react";
import firebase from "firebase";
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
    this.ref = firebase.database().ref("tournaments");
    this.ref
      .child(`${this.props.location.state.tournamentId}`)
      .on("value", snapshot => {
          this.setState({
            tournament: {
              ...snapshot.val(),
              id: this.props.location.state.tournamentId
            }
          });
        });

    const tournamentsPromise = fetch(
      "https://first-project-fe601.firebaseio.com/tournaments.json"
    )
      .then(response => response.json())
      .then(tournaments => {
        return Object.entries(tournaments || {}).map(([id, value]) => ({
          id,
          ...value
        }));
      });

    const playersPromise = fetch(
      "https://first-project-fe601.firebaseio.com/players.json"
    )
      .then(response => response.json())
      .then(players => {
        return Object.entries(players || {}).map(([id, value]) => ({
          id,
          ...value
        }));
      });

    Promise.all([tournamentsPromise, playersPromise]).then(data => {
      // console.log(tournamentsPromise);
      // console.log(playersPromise);
      // console.log(data);
      const searchedTournament = data[0].find(
        tournament => tournament.id === this.props.location.state.tournamentId
      );
      // console.log(searchedTournament);
      const searchedTournamentPlayers = searchedTournament.playersIds.map(
        id => {
          return data[1].find(player => player.id === id);
        }
      );
      // console.log(searchedTournamentPlayers);
      this.setState({
        tournament: searchedTournament,
        players: data[1],
        games: searchedTournament.games,
        tournamentStatus: searchedTournament.status,
        tournamentPlayers: searchedTournamentPlayers
      });
    });
  }

  componentWillUnmount() {
    // this.componentIsMount = false;
    if (this.ref) {
      this.ref.off("value", this.setFavEmployeeIds);
    }
  }

  render() {
    return (
      <div className="TournamentView-container">
        <TournamentInfo
          tournamentId={this.state.tournament.id}
          name={this.state.tournament.name}
          date={this.state.tournament.date}
          address={this.state.tournament.address}
          status={this.state.tournament.status}
          placesAvailable={this.state.tournament.placesAvailable}
          placesOccupied={this.state.tournament.placesOccupied}
          image={this.state.tournament.image}
          description={this.state.tournament.description}
        />
        {this.state.tournamentStatus === "future" ? (
          <div className="PlayerList">
            <JoinTournamentForm />{" "}
            <PlayerList
              tournamentPlayers={this.state.tournamentPlayers}
              playerListHeader={"Players taking part"}
            />{" "}
          </div>
        ) : (
          <ScoreList games={this.state.games} players={this.state.players} />
        )}
      </div>
    );
  }
}

export default TournamentView;
