import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./TournamentListItem.css";

class TournamentListItem extends Component {
  static propTypes = {
    tournament: PropTypes.shape(PropTypes.object)
  };
  render() {
    console.log(this.props.tournament.id);
    return (
      <div
        className={
          "tournamentListItemContainer tournamentStatus_" +
          this.props.tournament.status
        }
      >
        <div className="tournamentListItem_left">
          <div>{this.props.tournament.name}</div>
        </div>
        <div className="tournamentListItem_right">
          <div>Status: {this.props.tournament.status}</div>
          <button><Link to={{
            pathname: `/TournamentView/${this.props.tournament.id}`,
            state: {tournamentId: this.props.tournament.id}
          }
          }>Details</Link></button>
          <div></div>
        </div>
      </div>
    );
  }
}

export default TournamentListItem;
