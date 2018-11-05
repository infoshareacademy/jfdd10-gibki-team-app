import React, { Component } from 'react';
import { Link } from "react-router-dom";
import firebase from "firebase";
import "./HomeInfo.css";
import AuthComponent from '../AuthComponent/AuthComponent';
import Button from "@material-ui/core/Button";




class HomeInfo extends Component {
    state = {
        user: null,
      };
    
      componentDidMount() {
        firebase.auth().onAuthStateChanged(user => this.setState({ user }));
      }
    
    static propTypes = {
      
      };
    render() { 
        return ( 

        <header className="HomeInfo-Header">
         <div className="HomeInfo-Top">
         <div>

         <Button><Link to={"/PlayersView"}>Players</Link></Button>
         {this.state.user ? (<Button>
            <Link
              to={{
                pathname: `/PlayerView/${this.state.user.uid}`,
                state: { playerId: this.state.user.uid }
              }}
            >
              My profile
            </Link>
         </Button>) : ("")}
         </div>
         <div className="HomeInfo-rightButtons" >

         
         <AuthComponent/>
         </div>
         

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