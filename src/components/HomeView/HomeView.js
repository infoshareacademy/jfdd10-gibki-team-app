import React, { Component } from "react";
import HomeInfo from "../HomeInfo/HomeInfo";
import TournamentList from "../TournamentList/TournamentList";
import "./HomeView.css";
import SignUp from "../SignUp/SignUp";
import SignIn from "../SignIn/SignIn";
class HomeView extends Component {
  render() {
    return (
      <div className="HomeView-container">
        <HomeInfo/>
        <SignUp />
        <SignIn/>
        <TournamentList />
      </div>
    );
  }
}

export default HomeView;
