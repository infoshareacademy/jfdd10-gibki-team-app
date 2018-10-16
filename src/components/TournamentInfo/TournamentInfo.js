import React, { Component } from "react";
import PropTypes from "prop-types";
import "./TournamentInfo.css";

class TournamentInfo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  };

  render() {
    return (
      <header className="tournamentHeader">
      <h1>{this.props.name}</h1>
      
      </header>
    );
  }
}

export default TournamentInfo;
