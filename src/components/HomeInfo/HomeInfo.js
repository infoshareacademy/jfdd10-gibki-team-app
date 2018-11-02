import React, { Component } from 'react';
import { Link } from "react-router-dom";
import "./HomeInfo.css";
import AuthComponent from '../AuthComponent/AuthComponent';
import Button from "@material-ui/core/Button";



class HomeInfo extends Component {
    static propTypes = {
      
      };
    render() { 
        return ( 

        <header className="HomeInfo-Header">
         <div className="HomeInfo-Top">
         <Button><Link to={"/PlayersView"}>Players</Link></Button>
         <AuthComponent/>

         </div>
            <h1 className="HomeInfo-H1">Enter the Tournament and Have Some Fun!</h1>
            <div className="image-container">
            <img className="image-hand-left" src="./left-hand.png" alt="Left Hand" />
            <img className="image-hand-right" src="./right-hand.png" alt="Right Hand" />
            </div>
            
        </header>
         );
    }
}
 
export default HomeInfo;