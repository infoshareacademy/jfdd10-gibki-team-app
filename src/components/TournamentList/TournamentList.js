import React, { Component } from "react";
import "./TournamentList.css";

import TournamentListItem from "../TournamentListItem/TournamentListItem";

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
        <TournamentListItem tournament={tournament}/>
      </div>
    ));
  }
}

export default TournamentList;
