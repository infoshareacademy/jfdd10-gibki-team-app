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
    return (
        <div className="TournamentPair-container">
            <div className="TournamentPair-player-box"><span>Ben</span></div>
            <div className="TournamentPair-score-box"><span>3</span></div>
            <div className="TournamentPair-score-box"><span>4</span></div>
            <div className="TournamentPair-player-box"><span>Johnatan</span></div>
        </div>
    )
    }
}

export default TournamentPair
