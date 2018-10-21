import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import "./HomeView.css";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <TournamentList />
      </div>
    );
  }
}

export default HomeView;
