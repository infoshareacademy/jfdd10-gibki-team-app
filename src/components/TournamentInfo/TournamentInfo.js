import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import TournamentEditForm from "../TournamentEditForm/TournamentEditForm";
import "./TournamentInfo.css";
import Button from "@material-ui/core/Button";

class TournamentInfo extends Component {
  state = {
    user: null
  }

  componentDidMount() {
    this.unsubscribe = firebase.auth().onAuthStateChanged(
      user => this.setState({ user })
    )
  }

  componentWillUnmount() {
    if (this.unsubscribe) {
      this.unsubscribe()
    }
  }
  
  static propTypes = {
    name: PropTypes.string,
    date: PropTypes.string,
    address: PropTypes.string,
    status: PropTypes.string,
    placesOccupied: PropTypes.number,
    placesAvailable: PropTypes.number,
    image: PropTypes.string,
    description: PropTypes.string
  };

  getAvailablePlaces = (number, size) => {
    const placesArray = [];

    for (let i = 1; i <= size; i++) {
      if (i <= number) {
        placesArray.push(true);
      } else {
        placesArray.push(false);
      }
    }
    return placesArray;
  };

  render() {
    return (
      <header className="tournamentInfo-Header">
        <div className="tournamentInfo-top-row">
          <Button>
            <Link to="/">Home</Link>
          </Button>
          <Button>
            <Link to={"/PlayersView"}>Players</Link>
          </Button>
          {this.props.status === "future" && this.state.user && this.state.user.uid === this.props.owner ? (
            <TournamentEditForm
              tournamentId={this.props.id}
              name={this.props.name}
              date={this.props.date}
              address={this.props.address}
              description={this.props.description}
            />
          ) : (
            ""
          )}
        </div>
        <h1 className="playerInfo-h1">{this.props.name}</h1>
        <h1 className="playerInfo-h1">{this.props.description}</h1>
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
                {this.props.placesAvailable === this.props.placesOccupied
                  ? "none"
                  : this.getAvailablePlaces(
                      this.props.placesOccupied,
                      this.props.placesAvailable
                    ).map(
                      (el, index) =>
                        el === true ? (
                          <span key={index}>&#x25C6;</span>
                        ) : (
                          <span key={index}>&#x25C7;</span>
                        )
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
