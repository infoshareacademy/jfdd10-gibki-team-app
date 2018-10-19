import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./TournamentInfo.css";

class TournamentInfo extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    placesOccupied: PropTypes.number.isRequired,
    placesAvailable: PropTypes.number.isRequired,
    image: PropTypes.image
  };

  getAvailablePlaces = (number, size) => {
    const placesArray = [];

    for(let i = 1; i <= size; i ++) {
      if (i <= number) {
        placesArray.push(true);
      }
      else{
        placesArray.push(false)
      }
    }
    return placesArray
  }

  render() {
    return (
      <header className="tournamentInfo-Header">
      
      <div className="tournamentInfo-top-row">
       <button><Link to="/">Home</Link></button>
      <button><Link to={"/PlayersView"}>Players</Link></button>
      </div>
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
              <h2 className="tournamentInfo-h2">Address:</h2>
              <h2 className="tournamentInfo-h2">Status:</h2>
              <h2 className="tournamentInfo-h2">Places available:</h2>
            </div>

            <div className="tournamentInfo-data">
              <h2 className="tournamentInfo-h2">{this.props.date}</h2>
              <h2 className="tournamentInfo-h2">{this.props.address}</h2>
              <h2 className="tournamentInfo-h2">{this.props.status}</h2>
              <h2 className="tournamentInfo-h2">
              {(this.props.placesAvailable === this.props.placesOccupied) ? 'none' :            
                this.getAvailablePlaces(this.props.placesOccupied, this.props.placesAvailable).map(
                el => el === true ? <span>&#x25C6;</span> : <span>&#x25C7;</span>
              )}
              
              {/* {this.props.places} */}
              </h2>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default TournamentInfo;
