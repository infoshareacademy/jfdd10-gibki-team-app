import React, { Component } from "react";
import TournamentListItem from "../TournamentListItem/TournamentListItem";
import "./TournamentList.css";

class TournamentList extends Component {
  state = {
    tournaments: []
  };

  componentDidMount() {
    fetch("/data/tournaments.json")
      .then(response => response.json())
      .then(arrayOfTournaments =>
        this.setState({ tournaments: arrayOfTournaments })
      );
  }

  render() {
    return this.state.tournaments.map(tournament => (
      <div className="tournamentListContainer">
        {tournament.status === "future" ? "Future tournaments" : "Other"}

        {/* <TournamentListItem tournament={tournament} /> */}
      </div>
    ));
  }
}

export default TournamentList;
