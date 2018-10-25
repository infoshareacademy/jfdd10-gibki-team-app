import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ScoreList from '../ScoreList/ScoreList'
import './TournamentView.css';
import PlayerList from '../PlayerList/PlayerList'
import TournamentInfo from '../TournamentInfo/TournamentInfo'
import JoinTournamentForm from '../JoinTournamentForm/JoinTournamentForm'
class TournamentView extends Component {

    state = {
        tournament: '',
        games: [],
        tournamentStatus: '', 
        players: [],
        tournamentPlayers: [],
        tournamentId: null
    }

    static propTypes = {
        tournamentId: PropTypes.number
    }

    componentDidMount() {
        const tournamentsPromise = fetch("https://first-project-fe601.firebaseio.com/tournaments.json")
            .then(response => response.json())
            .then(tournaments => {
                Object.entries(tournaments || {}).map(
                  ([id, value]) => ({
                    id,
                    ...value
                  })
                )});

        const playersPromise = fetch("https://first-project-fe601.firebaseio.com/players.json")
            .then(response => response.json())
            .then(players => {
                Object.entries(players || {}).map(
                  ([id, value]) => ({
                    id,
                    ...value
                  })
                )});
        
        Promise.all([tournamentsPromise, playersPromise]).then(
            data => {
                const searchedTournament = data[0].find(tournament => tournament.id === this.props.location.state.tournamentId)
                const searchedTournamentPlayers = searchedTournament.playersIds.map(id => {
                    return data[1].find(player => player.id === id)})
                this.setState({tournament:searchedTournament, players: data[1], games: searchedTournament.games, tournamentStatus: searchedTournament.status, tournamentPlayers: searchedTournamentPlayers})
        })
    }

    // componentDidMount() {
    //     fetch("https://first-project-fe601.firebaseio.com/players.json")
    //       .then(response => response.json())
    //       .then(players => {
    //         const arrayOfPlayers = Object.entries(players || {}).map(
    //           ([id, value]) => ({
    //             id,
    //             ...value
    //           })
    //         );
    //         this.setState({ players: arrayOfPlayers });
    //       });
    //   }

    render() {
        return (
            <div className="TournamentView-container">

                <TournamentInfo name={this.state.tournament.name} date={this.state.tournament.date} address={this.state.tournament.address} status={this.state.tournament.status} placesAvailable={this.state.tournament.placesAvailable} placesOccupied={this.state.tournament.placesOccupied} image={this.state.tournament.image}/>
                {this.state.tournamentStatus === 'future' ? <div className="PlayerList"><JoinTournamentForm/> <PlayerList tournamentPlayers={this.state.tournamentPlayers} playerListHeader={"Players taking part"}/> </div> : <ScoreList games={this.state.games} players={this.state.players}/>}

            </div>
        )
    }
}

export default TournamentView
