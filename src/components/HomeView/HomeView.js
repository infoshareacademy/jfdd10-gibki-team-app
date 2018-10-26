import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import "./HomeView.css";
import AuthComponent from "../AuthComponent/AuthComponent";
import FormDialog from "../AuthComponent/example"
class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <FormDialog/>
        <AuthComponent/>
        <TournamentList />
      </div>
    );
  }
}

export default HomeView;
