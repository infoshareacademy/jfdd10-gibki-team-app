import React, { Component } from "react";
import firebase from "firebase";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
class Join extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    open: false,
    user: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickJoin = () => {
    console.log('user logged')
  }

  handleClickOpen = () => {
    this.setState({ open: true });
    console.log('user not logged')
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.setState({
        error: null,
        open: false,
        email: "",
        password: ""
      }))
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div>
        <Button onClick={this.state.user ? this.handleClickJoin : this.handleClickOpen}>Join</Button>
        <Dialog
          onSubmit={this.handleSubmit}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Join</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To log in, please enter your email address and password.
              {this.state.error && <p>{this.state.error.message}</p>}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Sign In
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Join;


//   render() {
//     return this.state.user ? (
//       <strong>
//         <p>
//           {this.state.user.email}{" "}
//           <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
//         </p>
//         {this.props.children}
//         </strong>  
//     ) : (
//       <>
//         <SignIn />
//         <SignUp />





//       </>
//     );
//   }
// }