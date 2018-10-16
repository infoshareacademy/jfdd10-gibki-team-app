import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TournamentListItem.css";

class TournamentListItem extends Component {
  static propTypes = {
    tournament: PropTypes.shape(PropTypes.object)
  };
  render() {
    return (
      <div
        className={
          "tournamentListItemContainer tournamentStatus_" +
          this.props.tournament.status
        }
      >
        <div className="tournamentListItem_left">
          <div key={this.props.tournament.id}>{this.props.tournament.name}</div>
        </div>
        <div className="tournamentListItem_right">
          <div>Status: {this.props.tournament.status}</div>
          <button>Details</button>
        </div>
      </div>
    );
  }
}

export default TournamentListItem;
