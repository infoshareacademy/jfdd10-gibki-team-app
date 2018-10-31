import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import PlayerListItem from '../PlayerListItem/PlayerListItem'
import JoinTournamentForm from '../JoinTournamentForm/JoinTournamentForm'
import "./PlayerList.css";
 
class PlayerList extends Component {
    
     static propTypes = {
        tournamentPlayers: PropTypes.array,
        playerListHeader: PropTypes.string
    }




     render() {
        return (
            <Fragment>
                <div className="Header-container">
                    <h1>{this.props.playerListHeader}</h1>    
                    <JoinTournamentForm />{" "}
                </div>
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