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

    // static defaultProps = {
    //     playerOne: '?',
    //     playerTwo: '?',
    //     scoreOne: '?',
    //     scoreTwo: '?'
    // }

    // scoreValidation = (score) => {
    //     return isNaN(score) ? '?' : this.props.scoreOne
    // }

    pickWinner = () => {
        return (this.props.scoreOne > this.props.scoreTwo) ? "TournamentPair-player-box-winner" : "TournamentPair-player-box-loser"
    }
    pickLoser = () => {
        return (this.props.scoreTwo > this.props.scoreOne) ? "TournamentPair-player-box-winner" : "TournamentPair-player-box-loser"
    }
    isPlayerOneAssigned = () => {
        return this.props.playerOne !== '' ? this.props.playerOne : '?'
    }
    isPlayerTwoAssigned = () => {
        return this.props.playerTwo !== '' ? this.props.playerTwo : '?'
    }

    render() {
        if (this.props.scoreOne && this.props.scoreTwo) {
            return (
                <div className="TournamentPair-container">
                    <div className={`${this.pickWinner()}`}><span>{this.props.playerOne}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreOne}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreTwo}</span></div>
                    <div className={`${this.pickLoser()}`}><span>{this.props.playerTwo}</span></div>
                </div>
            )
        }
        else {
            return (
                <div className="TournamentPair-container">
                    <div className={`${this.pickWinner()}`}><span>{this.isPlayerOneAssigned()}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreOne}</span></div>
                    <div className="TournamentPair-score-box-after"><span>{this.props.scoreTwo}</span></div>
                    <div className={`${this.pickLoser()}`}><span>{this.isPlayerTwoAssigned()}</span></div>
                </div>
            )
        }
    }
}

export default TournamentPair
