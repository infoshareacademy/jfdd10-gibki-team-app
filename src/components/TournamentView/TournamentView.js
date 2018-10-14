import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import TournamentInfo from '../TournamentInfo/TournamentInfo'
// import PlayerList from '../PlayerList/PlayerList'
import ScoreList from '../ScoreList/ScoreList'
import './TournamentView.css';

class TournamentView extends Component {

    state = {
        tournaments: [],
        // tournament: [],
        // games: [],

        tournamentStatus: 'finished', //temporary value - will be taken from tournaments
        players: []
    }

    static propTypes = {
        tournamentId: PropTypes.number.isRequired
    }

    componentDidMount() {
        fetch(process.env.PUBLIC_URL + "/data/tournaments.json")
            .then(response => response.json())
            .then(arrayOfTournaments => this.setState({ tournaments: arrayOfTournaments }));
            console.log(this.state.tournaments)
        
            fetch(process.env.PUBLIC_URL + "/data/players.json")
            .then(response => response.json())
            .then(arrayOfPlayers => this.setState({ players: arrayOfPlayers }));
            console.log(this.state.players)
    }

    render() {
        const tournamentId = this.props.tournamentId
        
        const tournament = this.state.tournaments.filter( 
            tournament => tournament.id === tournamentId
        )[0]
        console.log(tournament) 
        // console.log(tournament.games)

        const games = tournament
        console.log(games)

        // const tournamentStatus = tournament.status
        // console.log(tournamentStatus)
        return (
            <div className="TournamentView-container">
                {/* <TournamentInfo/> */}
                {this.state.tournamentStatus === 'future' ? 'PlayerList component' : <ScoreList games={games} />}
            </div>
        )
    }
}

export default TournamentView
