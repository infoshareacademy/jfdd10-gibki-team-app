import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./HomeInfo.css";
class HomeInfo extends Component {
    static propTypes = {
      
      };
    render() { 
        return ( 

        <header className="HomeInfo-Header">
            <h1 className="HomeInfo-H1">Enter the Tournament and Have Some Fun!</h1>
            <div class="image-container">
            <img class="image-hand-left" src="./left-hand.png" alt="Left Hand" />
            <img class="image-hand-right" src="./right-hand.png" alt="Right Hand" />
            </div>
            <button><Link to={"/PlayersView"}>Players</Link></button>
        </header>
         );
    }
}
 
export default HomeInfo;