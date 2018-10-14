import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import TournamentInfo from '../TournamentInfo/TournamentInfo'
// import PlayerList from '../PlayerList/PlayerList'
import ScoreList from '../ScoreList/ScoreList'
import './TournamentView.css';

class TournamentView extends Component {

    state = {
        tournament: [],
        tournamentStatus: 'finished'
    }

    render() {
        return (
            <div className="TournamentView-container">
                {/* <TournamentInfo/> */}
                {this.state.tournamentStatus === 'future' ? 'PlayerList component' : <ScoreList />}
            </div>
        )
    }
}

export default TournamentView
