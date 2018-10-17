import React, { Component } from "react";
import moment from "moment";
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
        var firstDate = moment(t1.date, 'DD/MM/YYYY');
        var secondDate = moment(t2.date, 'DD/MM/YYYY');
        return -firstDate.diff(secondDate)
      })
      .map(tournament => (
        <div className="tournamentListContainer">
          <TournamentListItem tournament={tournament} key={tournament.id}/>
        </div>
      ));
  }
}

export default TournamentList;
