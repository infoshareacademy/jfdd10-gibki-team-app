import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import "./HomeView.css";
import AuthComponent from "../AuthComponent/AuthComponent";
class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <AuthComponent/>
        <TournamentList />
      </div>
    );
  }
}

export default HomeView;
