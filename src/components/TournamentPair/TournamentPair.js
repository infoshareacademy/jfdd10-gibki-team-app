import React, { Component } from 'react'
import './TournamentPair.css';

class TournamentPair extends Component {


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
