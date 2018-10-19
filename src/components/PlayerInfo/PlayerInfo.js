import React, { Component } from "react";
import { Link } from "react-router-dom";
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
      <header className="playerInfo-Header">
      <div className="tournamentInfo-top-row">
      <button><Link to="/">Home</Link></button>
      <button><Link to="/PlayersView">Players</Link></button>
      </div>
        <h1 className="playerInfo-h1" >Player Info</h1>
        <div className="playerInfo-container">
          <img
            className="playerInfo-image"
            src={this.props.image}
            alt="User Avatar"
          />
          
          <div className="playerInfo-info">
            <div>
              <h2 className="playerInfo-h2">Player:</h2>
            {this.props.ranking !== undefined && <h2 className="playerInfo-h2">Ranking:</h2>}  
            {this.props.points !== undefined && <h2 className="playerInfo-h2">Points:</h2>} 
              
            </div>
            
            <div className="playerInfo-data">
            <h2 className="playerInfo-nick">{this.props.name}</h2>
            {this.props.ranking !== undefined && <h2 className="playerInfo-h2">
              { this.getStars(this.props.ranking).map(
                el => el === true ? <span>&#9733;</span> : <span>&#9734;</span>
              ) }
            </h2>}
            <h2 className="playerInfo-h2">{this.props.points}</h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default PlayerInfo;
