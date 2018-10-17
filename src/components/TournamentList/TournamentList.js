import React, { Component } from "react";
import moment from "moment";
import TournamentListItem from "../TournamentListItem/TournamentListItem";
import "./TournamentList.css";

class TournamentList extends Component {
  state = {
    tournaments: []
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/tournaments.json")
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
      }).filter(
        tournament => {
          return this.props.playerId === undefined ? true : tournament.playersIds.includes(this.props.playerId)
        }
      )
      .map(tournament => (
        <div className="tournamentListContainer" key={tournament.id}>
          <TournamentListItem tournament={tournament || {}} />
        </div>
      ));
  }
}

export default TournamentList;
