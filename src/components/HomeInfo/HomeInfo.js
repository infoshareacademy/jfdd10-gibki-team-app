import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./HomeInfo.css";
class HomeInfo extends Component {
    static propTypes = {
      
      };
    render() { 
        return ( 

        <header className="HomeInfo-Header">
         <div className="tournamentInfo-top-row">
         <button><Link to={"/PlayersView"}>Players</Link></button>
         </div>
            <h1 className="HomeInfo-H1">Enter the Tournament and Have Some Fun!</h1>
            <div class="image-container">
            <img class="image-hand-left" src="./left-hand.png" alt="Left Hand" />
            <img class="image-hand-right" src="./right-hand.png" alt="Right Hand" />
            </div>
            
        </header>
         );
    }
}
 
export default HomeInfo;