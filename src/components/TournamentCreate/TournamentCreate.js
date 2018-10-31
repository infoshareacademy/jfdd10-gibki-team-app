import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import firebase from "firebase";

export default class TournamentCreate extends React.Component {
  state = {
    open: false,
    placesAvailable: 8,
    owner: "",
    placesOccupied: null,
    status: "future",
    winnerId: null,
    games: [
      {},
      {},
      {},
      {},
      {},
      {},
      {}
    ],
    image: "",
    playerIds: [],

    name: "",
    date: null,
    address: null,
    description: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { open, ...formData } = this.state
    firebase
      .database()
      .ref("tournaments")
      .push(formData);
      this.setState({
        name: "",
        date: "",
        address: "",
        description: "",
      });
    this.handleClose();
  };

  makeHandleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Create Tournament</Button>

        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <form onSubmit={this.handleSubmit}>
            <DialogTitle id="form-dialog-title">Create</DialogTitle>
            <DialogContent>
              <DialogContentText>
                To add a tournament please add all required information below.
              </DialogContentText>

              <TextField
                autoFocus
                onChange={this.makeHandleChange("name")}
                value={this.state.name}
                margin="normal"
                id="name"
                label="Tournament Name"
                type="name"
                fullWidth
              />
              <TextField
                onChange={this.makeHandleChange("date")}
                value={this.state.date}
                margin="normal"
                id="date"
                label="Tournament Date"
                type="name"
                fullWidth
              />
              <TextField
                onChange={this.makeHandleChange("address")}
                value={this.state.address}
                margin="normal"
                id="address"
                label="Tournament Address"
                type="name"
                fullWidth
              />
              <TextField
                onChange={this.makeHandleChange("description")}
                value={this.state.description}
                margin="normal"
                id="description"
                label="Tournament Description"
                type="name"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Create
              </Button>
            </DialogActions>
          </form>
        </Dialog>
      </div>
    );
  }
}
