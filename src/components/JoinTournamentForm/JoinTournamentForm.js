import React, { Component } from 'react'
import './JoinTournamentForm.css'

class JoinTournamentForm extends Component {


render () {
    return (
        <div className="AddPlayer">
            <form className="AddPlayerForm">
               
               <div className="TournamentForm">
                   <label className="AddPlayer-name" for="name">Your name </label>
                   <input className="AddPlayer-input" id="name" />
                   <button disabled="true" className="JoinButton">Join</button>
               </div>
           </form>
        </div>
    )

}
}
export default JoinTournamentForm