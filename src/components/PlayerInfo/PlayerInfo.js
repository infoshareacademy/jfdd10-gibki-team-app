import React, { Component } from "react";
import PropTypes from "prop-types";
import "./PlayerInfo.css";

class PlayerInfo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ranking: PropTypes.string,
    points: PropTypes.number
  };

  getStars = (number) => {
    const starsArray = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= number) {
        starsArray.push(true);
      } else {
        starsArray.push(false);

      }
    }
    return starsArray;
  }

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
            <h2>
              { this.getStars(this.props.ranking).map(
                el => el === true ? <span>&#9733;</span> : <span>&#9734;</span>
              ) }
            </h2>
            <h2>{this.props.points}</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default PlayerInfo;
