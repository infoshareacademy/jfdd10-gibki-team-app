import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PlayerInfo from '../PlayerInfo/PlayerInfo'
import TournamentList from '../TournamentList/TournamentList';

class PlayerView extends Component {
    state = { 
        players: [],
        playerId: null
     }

     static propTypes = {
         playerId: PropTypes.number
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
        const player = this.state.players.find(player => player.id === this.props.location.state.playerId)
        if (player === undefined){
            return <div>PLayer Not Found</div>
        }
        return ( 
            <div>
                <PlayerInfo name={player.name} image={player.image} ranking={player.ranking} points={player.points}/>
                <h1>My tournaments</h1>
                <TournamentList playerId={player.id}/>
            </div>
         );
    }
}
 
export default PlayerView;