import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";

export default class FormDialog extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    error: null,
    playerName: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
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
            image: "./purple-avatar.png"
          });
        this.setState({
          error: null,
          email: "",
          password: "",
          playerName: "",
          open: false
        });
      })
      .catch(error => this.setState({ error }));
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Sign Up</Button>
        <Dialog
          onSubmit={this.handleSubmit}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign Up</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To register in our site, please enter your name, email and
              password.
              {this.state.error && (
                <strong>
                  <p style={{ color: "red" }}>{this.state.error.message}</p>
                </strong>
              )}
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
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Sign Up
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
