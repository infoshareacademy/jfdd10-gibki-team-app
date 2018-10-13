import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TournamentPair.css';

class TournamentPair extends Component {

    static propTypes = {
        gameId: PropTypes.number,
        playerOne: PropTypes.string,
        playerTwo: PropTypes.string,
        scoreOne: PropTypes.number,
        scoreTwo: PropTypes.number,
    }

pickWinner = (score1, score2) => {
    return score1 > score2 ? "winner" : "loser"
}

    render() {
        const scoreOne = this.props.scoreOne;
        const scoreTwo = this.props.scoreTwo;
        
        if (this.props.scoreOne && this.props.scoreTwo) {
            return (
                <div className="TournamentPair-container">
                    <div className={`TournamentPair-player-box-${this.pickWinner({scoreOne},{scoreTwo})}`}><span>{this.props.playerOne}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreOne}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreTwo}</span></div>
                    <div className={`TournamentPair-player-box-${this.pickWinner({scoreOne},{scoreTwo})}`}><span>{this.props.playerTwo}</span></div>
                </div>
            )
        }
    }
}

export default TournamentPair
