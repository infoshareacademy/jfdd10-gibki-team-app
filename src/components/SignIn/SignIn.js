import React, { Component } from 'react'
import firebase from 'firebase'

class SignIn extends Component {
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
        firebase.auth().signInWithEmailAndPassword(
          this.state.email,
          this.state.password
        ).then(
            () => this.setState({ error: null }) 
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
                    <button>Sign In</button>
                </form>
            </div>
         );
    }
}
 
export default SignIn;