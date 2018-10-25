import React, { Component } from 'react';

class FirebaseView extends Component {
    state = { 
        email: "",
        password: ""

     }

    handleChange = event => (
        this.setState( {[event.target.name]: event.target.value})
    )


handleSubmit = event => {
    event.preventDefault();
    fetch("https://first-project-fe601.firebaseio.com/players.json", {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      }),
     
    });
  };

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
                    <input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button>Register</button>
                </form>
            </div>
         );
    }
}
 
export default FirebaseView;