import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import TournamentList from '../TournamentList/TournamentList';
import TournamentCreate from '../TournamentCreate/TournamentCreate';
import "./PlayerView.css"
class PlayerView extends Component {
    state = { 
        players: [],
        playerId: null
     }

     static propTypes = {
         playerId: PropTypes.number
     }

     componentDidMount() {
        fetch("https://first-project-fe601.firebaseio.com/players.json")
          .then(response => response.json())
          .then(players => {
            const arrayOfPlayers = Object.entries(players || {}).map(
              ([id, value]) => ({
                id,
                ...value
              })
            );
            this.setState({ players: arrayOfPlayers });
          });
      }

    render() { 
        const player = this.state.players.find(player => player.id === this.props.match.params.playerId)
        if (player === undefined){
            return <div>Player Not Found</div>
        }
        return ( 
            <div>
                <PlayerInfo name={player.name} image={player.image} ranking={player.ranking} points={player.points}/>
                <div className="myTournament-bar">
                <h1>My tournaments</h1>
                <TournamentCreate/>
                </div>
                <TournamentList playerId={player.id}/>
            </div>
         );
    }
}
 
export default PlayerView;
