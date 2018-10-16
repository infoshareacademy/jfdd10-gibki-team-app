import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TournamentInfo.css";

class TournamentInfo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  };

  render() {
    return (
      <header className="tournamentInfo-Header">
        <h1>{this.props.name}</h1>
        <div className="tournamentInfo-container">
          <img
            className="tournamentInfo-image"
            src={this.props.image}
            alt="Tournament view"
          />
          <div className="tournamentInfo-info">
            <div className="tournamentInfo-DataNames">
              <h2 className="tournamentInfo-h2">Date:</h2>
              <h2 className="tournamentInfo-h2">City:</h2>
              <h2 className="tournamentInfo-h2">Places available:</h2>
              <h2 className="tournamentInfo-h2">Status:</h2>
            </div>

            <div className="tournamentInfo-data">
              <h2 className="tournamentInfo-h2">{this.props.date}</h2>
              <h2 className="tournamentInfo-h2">{this.props.city}</h2>
              <h2 className="tournamentInfo-h2">{this.props.points}</h2>
              <h2 className="tournamentInfo-h2">{this.props.places}</h2>
              <h2 className="tournamentInfo-h2">{this.props.status}</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default TournamentInfo;
