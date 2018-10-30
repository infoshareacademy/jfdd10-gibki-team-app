import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from '../PlayerListItem/PlayerListItem'

 
class PlayerList extends Component {
    
     static propTypes = {
        tournamentPlayers: PropTypes.array,
        playerListHeader: PropTypes.string
    }




     render() {
        return (
            <Fragment>
                <h1>{this.props.playerListHeader}</h1>
                <ul className="ulList">
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
            </Fragment>
        )
    }
}
 export default PlayerList