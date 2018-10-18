import React, { Component } from 'react';
import { Link } from "react-router-dom";
import PlayerList from '../PlayerList/PlayerList'
import "./PlayersView.css";

class PlayersView extends Component {
    state = { 
        players: []
     }



    componentDidMount() {
       fetch('/data/players.json').then(
           response => response.json()
       ).then(players => {
           const arrayOfPlayers = Object.keys(players).map(
               key => ({
                   id: key, 
                   ...players[key]
               }))
           this.setState({ players: arrayOfPlayers })
       })
   }
    render() { 
        return (
            <div className="playersView">
            <button><Link to="/">Home</Link></button>
                <PlayerList tournamentPlayers={this.state.players} playerListHeader={"Players"}/>
            </div>
          );
    }
}
 
export default PlayersView;