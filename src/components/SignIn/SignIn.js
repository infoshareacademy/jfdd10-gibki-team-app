import React, { Component } from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    open: false
  };

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

  handleClickOpen = () => {
    this.setState({ open: true });
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
        <Button onClick={this.handleClickOpen}>Sign In</Button>
        <Dialog
          onSubmit={this.handleSubmit}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Sign In</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To log in, please enter your email address and password.
              {this.state.error && (
                <strong>
                  <p style={{ color: "red" }}>{this.state.error.message}</p>
                </strong>
              )}
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

export default SignIn;
