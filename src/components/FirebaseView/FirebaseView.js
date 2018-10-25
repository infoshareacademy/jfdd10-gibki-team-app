import React, { Component } from 'react'
import firebase from 'firebase'

class FirebaseView extends Component {
    state = { 
        email: "",
        password: "",
        error: null

     }

    handleChange = event => (
        this.setState( {[event.target.name]: event.target.value})
    )


    handleSubmit = event => {
        event.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(
          this.state.email,
          this.state.password
        ).then(
          (data) => {
              firebase.database().ref('/players/' + data.user.uid).set({
                  name: 'Anonymous'
              })
              this.setState({ error: null })
          }
        ).catch(
          error => this.setState({ error })
        )
        this.setState({email: "",
    password: "" })
      }

  componentDidMount(){
      fetch("https://first-project-fe601.firebaseio.com/players.json")
      .then(response => response.json())
      .then(players => { 
          this.setState({
            players: Object.entries(players || {}).map(([id, value]) => ({ id, ...value }))
        })
    })
  }
    
    render() { 
        return ( 
            <div>
                <form onSubmit={ this.handleSubmit}>
                {this.state.error && <p>{this.state.error.message}</p>}
                    <input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button>Register</button>
                </form>
            </div>
         );
    }
}
 
export default FirebaseView;