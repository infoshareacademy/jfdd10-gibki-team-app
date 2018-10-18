import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from '../PlayerListItem/PlayerListItem'
 
class PlayerList extends Component {
    
     static propTypes = {
        tournamentPlayers: PropTypes.array
    }




     render() {
        return (
            <div>
                <h1>Players taking part</h1>
                <ul>
                    {this.props.tournamentPlayers.map(
                        player =>  
                            <PlayerListItem 
                            name={player.name}
                            id={player.id}
                            image={player.image}
                            key={player.id}  
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}
 export default PlayerList