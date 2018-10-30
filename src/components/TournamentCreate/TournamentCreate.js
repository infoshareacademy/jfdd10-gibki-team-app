import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class TournamentCreate extends React.Component {
  state = {
    open: false
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
        <Button onClick={this.handleClickOpen}>Create Tournament</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Create</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a tournament please add all required information below.
            </DialogContentText>
            <form>
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Tournament Name"
                type="name"
                fullWidth
              />
             <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Tournament Date"
                type="name"
                fullWidth
              />
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Tournament Address"
                type="name"
                fullWidth
              />
              <TextField
                autoFocus
                margin="normal"
                id="name"
                label="Number of Players"
                type="name"
                fullWidth
              />
              
        

            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
