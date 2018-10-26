import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import "./HomeView.css";
import FirebaseView from "../FirebaseView/FirebaseView";

class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <FirebaseView />
        <TournamentList />
      </div>
    );
  }
}

export default HomeView;
