import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TournamentPair from '../TournamentPair/TournamentPair'
import './ScoreList.css';

class ScoreList extends Component {

    static propTypes = {
        games: PropTypes.arrayOf.isRequired
    }

    render() {
        console.log(this.props.games);
        return (
            <div className="ScoreList-container">
                <div>
                    <h2>Round 1</h2>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                </div>
                <div>
                    <h2>Semi-finals</h2>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                </div>
                <div>
                    <h2>Final</h2>
                    <TournamentPair playerOne={'Ben'} playerTwo={'John'} scoreOne={1} scoreTwo={2}/>
                </div>
            </div>
        )
    }
}

export default ScoreList
