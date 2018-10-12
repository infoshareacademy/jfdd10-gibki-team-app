import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from '../PlayerListItem/PlayerListItem'
 
class PlayerList extends Component {
     static propTypes = {
        players: PropTypes.array
    }
     render() {
        return (
            <div>
                <ul>
                    {this.props.players.map(
                        player => (
                            <PlayerListItem 
                            name={player.name}
                            id={player.id}
                            image={player.image}
                            key={player.id}  
                            />
                        )
                    )
                    }
                </ul>
            </div>
        )
    }
}
 export default PlayerList