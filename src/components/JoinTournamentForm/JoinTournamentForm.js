import React, { Component } from "react";
import PropTypes from "prop-types";
import firebase from "firebase";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
class Join extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    open: false,
    open2: false,
    open3: false,
    user: null,
    playerName: ""
  };

  static propTypes = {
    tournamentId: PropTypes.string,
    tournamentPlayers: PropTypes.array
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleClickJoin = () => {
    if (
      this.props.tournamentPlayers.some(
        player => player.id === this.state.user.uid
      )
    ) {
      this.setState({ open3: true });
      return;
    }
    firebase
      .database()
      .ref(`tournaments/${this.props.tournamentId}/playersIds`)
      .child(`${this.props.tournamentPlayers.length}`)
      .set(this.state.user.uid);
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClickSignUpDialog = event => {
    this.setState({ open2: true });
    this.setState({ open: false, error: null });
  };

  handleClose = () => {
    this.setState({ open: false, error: null });
  };
  handleClose2 = () => {
    this.setState({ open2: false, error: null });
  };
  handleClose3 = () => {
    this.setState({ open3: false, error: null });
  };

  handleSubmitSignIn = event => {
    event.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        this.setState({
          error: null,
          open: false,
          email: "",
          password: ""
        });
        firebase
          .database()
          .ref(`tournaments/${this.props.tournamentId}/playersIds`)
          .child(`${this.props.tournamentPlayers.length}`)
          .set(data.user.uid);
      })
      .catch(error => this.setState({ error }));
  };

  handleSubmitSignUp = event => {
    event.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(data => {
        firebase
          .database()
          .ref("/players/" + data.user.uid)
          .set({
            name: this.state.playerName,
            points: "",
            ranking: "",
            image: "../purple-avatar.png"
          });
        this.setState({
          error: null,
          email: "",
          password: "",
          playerName: "",
          open2: false
        });
        firebase
          .database()
          .ref(`tournaments/${this.props.tournamentId}/playersIds`)
          .child(`${this.props.tournamentPlayers.length}`)
          .set(data.user.uid);
      })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <div>
        <Button
          onClick={
            this.state.user ? this.handleClickJoin : this.handleClickOpen
          }
        >
          Join
        </Button>
        <Dialog
          open={this.state.open3}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">
            You've already joined
          </DialogTitle>
          <DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose3} color="primary">
                Close
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Dialog
          onSubmit={this.handleSubmitSignIn}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In and Join</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To join tournament, please sign in first.
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
            <DialogActions>
              <Button onClick={this.handleSubmitSignIn} color="primary">
                Join
              </Button>
            </DialogActions>
          </DialogContent>

          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              If you don't have an account, please sign up first.
              {this.state.error && <p>{this.state.error.message}</p>}
            </DialogContentText>
            <DialogActions>
              <Button onClick={this.handleClickSignUpDialog} color="primary">
                Sign Up
              </Button>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>

        <Dialog
          onSubmit={this.handleSubmitSignUp}
          open={this.state.open2}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up and Join</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To join tournament, please sign up first.
              {this.state.error && <p>{this.state.error.message}</p>}
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Your name"
              type="name"
              name="playerName"
              value={this.state.playerName}
              onChange={this.handleChange}
              fullWidth
            />
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
            <DialogActions>
              <Button onClick={this.handleSubmitSignUp} color="primary">
                Join
              </Button>
              <Button onClick={this.handleClose2} color="primary">
                Cancel
              </Button>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default Join;
