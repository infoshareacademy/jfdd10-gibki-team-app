import React, { Component } from "react";
import Moments from "moment.js";
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
    return this.state.tournaments
      .sort((t1, t2) => {
        if (t1 < t2) {
          return -1;
        } else if (t1 > t2) {
          return 1;
        } else return 0;
      })
      .map(tournament => (
        <div className="tournamentListContainer">
          <TournamentListItem tournament={tournament} />
        </div>
      ));
  }
}

export default TournamentList;
