import React, { Component } from 'react'
import firebase from 'firebase'
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';

class SignIn extends Component {
    state = { 
        email: "",
        password: "",
        error: null,
        open: false

     }

    handleChange = event => (
        this.setState( {[event.target.name]: event.target.value})
    )
    
    handleClickOpen = () => {
        this.setState({ open: true });
      };


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
        this.setState({ open: false })
        this.setState({email: "", password: "" })
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
        //     <div>
        //     <Button onClick={this.handleClickOpen}>Sign In</Button>
        //     <Dialog
        //       open={this.state.open}
        //       onClose={this.handleClose}
        //       aria-labelledby="form-dialog-title"
        //     >
        //       <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
        //       <DialogContent>
        //         <DialogContentText>
        //           To subscribe to this website, please enter your email address here. We will send
        //           updates occasionally.
        //         </DialogContentText>
        //         <TextField
        //           autoFocus
        //           margin="dense"
        //           id="name"
        //           label="Email Address"
        //           type="email"
        //           fullWidth
        //         />
        //       </DialogContent>
        //       <DialogActions>
        //         <Button onClick={this.handleClose} color="primary">
        //           Cancel
        //         </Button>
        //         <Button onClick={this.handleClose} color="primary">
        //           Subscribe
        //         </Button>
        //       </DialogActions>
        //     </Dialog>
        //   </div>
         );
    }
}
 
export default SignIn;