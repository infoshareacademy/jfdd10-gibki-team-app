import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";

<<<<<<< HEAD

class SignUp extends Component {
    state = { 
        email: "",
        password: "",
        error: null
=======
export default class FormDialog extends React.Component {
  state = {
    open: false,
    email: "",
    password: "",
    error: null,
    playerName: ""
  };
>>>>>>> origin/master

  handleChange = event =>
    this.setState({ [event.target.name]: event.target.value });

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
            points:"",
            ranking:"",
            image:"./purple-avatar.png"
          });
        this.setState({ error: null });
      })
      .catch(error => this.setState({ error }));
      this.setState({
          email: "",
          password: "",
          playerName: ""
        });
        this.setState({ open: false });
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  componentDidMount() {
    fetch("https://first-project-fe601.firebaseio.com/players.json")
      .then(response => response.json())
      .then(players => {
        this.setState({
          players: Object.entries(players || {}).map(([id, value]) => ({
            id,
            ...value
          }))
        });
      });
  }

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
              To register in our site, please enter your name, email and password.
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
<<<<<<< HEAD
    
    render() { 
        return ( 
            <div>
                <form onSubmit={ this.handleSubmit}>
                {this.state.error && <p>{this.state.error.message}</p>}
                    <input placeholder="email" name="email" value={this.state.email} onChange={this.handleChange}></input>
                    <input placeholder="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                    <button id="form-dialog-title" >Register</button>
                </form>
            </div>
         );
    }
=======
>>>>>>> origin/master
}
