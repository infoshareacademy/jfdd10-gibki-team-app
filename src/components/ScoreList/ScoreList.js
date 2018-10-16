import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TournamentPair from '../TournamentPair/TournamentPair'
import './ScoreList.css';

class ScoreList extends Component {

    static propTypes = {
        games: PropTypes.array.isRequired,
        players: PropTypes.array.isRequired
    }

    getPlayerName = (playerId) => {
        const player = this.props.players.find(player => player.id === playerId)
        return (player && player.name) || ''
     }

getGameTitle = (index) => {
    if (index === 0) {return 'Round 1'}
    if (index === 4) {return 'Semi-finals'}
    if (index === 6) {return 'Final'}
}

    render() {
                return (
            <div className="ScoreList-container">
            {
                this.props.games.map( (el, index) => {
                    return <div key={el.no}>
                                <h2>{this.getGameTitle(index)}</h2> 
                                <TournamentPair playerOne={this.getPlayerName(el.playerOneId)} playerTwo={this.getPlayerName(el.playerTwoId)} scoreOne={el.playerOneScore} scoreTwo={el.playerTwoScore}/>
                            </div>
                })
            }
            </div>
        )
    }
}

export default ScoreList
