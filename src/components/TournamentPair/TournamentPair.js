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

    render() {
        if (this.props.scoreOne && this.props.scoreTwo) {
            return (
                <div className="TournamentPair-container">
                    <div className="TournamentPair-player-box"><span>{this.props.playerOne}</span></div>
                    <div className="TournamentPair-score-box"><span>{this.props.scoreOne}</span></div>
                    <div className="TournamentPair-score-box"><span>{this.props.scoreTwo}</span></div>
                    <div className="TournamentPair-player-box"><span>{this.props.playerTwo}</span></div>
                </div>
            )
        }
    }
}

export default TournamentPair
