import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import TournamentList2 from "../TournamentList2/TournamentList2";
import "./HomeView.css";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <h1>Tournaments list</h1>
        <TournamentList />
        <hr />
        <TournamentList2 />
      </div>
    );
  }
}

export default HomeView;
