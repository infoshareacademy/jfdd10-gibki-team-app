import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  };

  render() {
    return (
      <header className="playerHeader">
        <h1>Player Info</h1>
        <div className="player-container">
          <img
            className="player-image"
            src={this.props.image}
            alt="User Avatar"
          />
          <div className="player-info">
            <div>
              <h2>Player:</h2>
              <h2>Ranking:</h2>
              <h2>Points:</h2>
              
            </div>
            
            <div className="player-data">
            <h2 className="nick">{this.props.name}</h2>
            <h2>&#9733;</h2>
            <h2>14</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default PlayerInfo;
