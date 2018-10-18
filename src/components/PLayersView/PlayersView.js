import React, { Component } from 'react';
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
                <PlayerList tournamentPlayers={this.state.players} />
            </div>
          );
    }
}
 
export default PlayersView;