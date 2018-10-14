import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './TournamentPair.css';

class TournamentPair extends Component {

    static propTypes = {
        gameId: PropTypes.number,
        playerOne: PropTypes.string.isRequired,
        playerTwo: PropTypes.string.isRequired,
        scoreOne: PropTypes.number,
        scoreTwo: PropTypes.number,
    }

    pickWinner = () => {
        return (this.props.scoreOne > this.props.scoreTwo) ? "TournamentPair-player-box-winner" : "TournamentPair-player-box-loser"
    }
    pickLoser = () => {
        return (this.props.scoreTwo > this.props.scoreOne) ? "TournamentPair-player-box-winner" : "TournamentPair-player-box-loser"
    }
    isPlayerAssigned = (player) => {
        return player !== '' ? "TournamentPair-player-box-assigned" : "TournamentPair-player-box"
    }
    isPlayerOneAssigned = () => {
        return this.props.playerOne !== '' ? this.props.playerOne : '?'
    }
    isPlayerTwoAssigned = () => {
        return this.props.playerTwo !== '' ? this.props.playerTwo : '?'
    }

    render() {
        if (Number.isInteger(this.props.scoreOne) === true && Number.isInteger(this.props.scoreTwo) === true) {
            return (
                <div className="TournamentPair-container">
                    <div className={`${this.pickWinner()}`}><span>{this.props.playerOne}</span></div>
                    <div className="TournamentPair-score-box"><span>{this.props.scoreOne}</span></div>
                    <div className="TournamentPair-score-box"><span>{this.props.scoreTwo}</span></div>
                    <div className={`${this.pickLoser()}`}><span>{this.props.playerTwo}</span></div>
                </div>
            )
        }
        else {
            return (
                <div className="TournamentPair-container">
                    <div className={`${this.isPlayerAssigned(this.props.playerOne)}`}><span>{this.isPlayerOneAssigned()}</span></div>
                    <div className="TournamentPair-score-box"><span>{'?'}</span></div>
                    <div className="TournamentPair-score-box"><span>{'?'}</span></div>
                    <div className={`${this.isPlayerAssigned(this.props.playerTwo)}`}><span>{this.isPlayerTwoAssigned()}</span></div>
                </div>
            )
        }
    }
}

export default TournamentPair
