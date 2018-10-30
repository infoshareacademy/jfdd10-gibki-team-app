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
    open: false,
    form: {
        name: null,
        date: null,
        address: null,
        playersCount: null    
    }
    // name: null,
    // date: null,
    // address: null,
    // playersCount: null
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event,b) => {
      console.log(this.state.form);
  }

  handleChange = (name) => event => {
    this.setState({
        // this.state[name]: event.target.value,
        ...this.state,
        form: {
            ...this.state.form,
            [name]: event.target.value
        }
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
          <DialogTitle id="form-dialog-title">Create</DialogTitle>
          <DialogContent>
            <DialogContentText>
              To add a tournament please add all required information below.
            </DialogContentText>
           
              <TextField
                autoFocus
                onChange={this.handleChange('name')}
                margin="normal"
                id="name"
                label="Tournament Name"
                type="name"
                fullWidth
              />
             <TextField
                autoFocus
                onChange={this.handleChange('date')}
                margin="normal"
                id="date"
                label="Tournament Date"
                type="name"
                fullWidth
              />
              <TextField
                autoFocus
                onChange={this.handleChange('address')}
                margin="normal"
                id="address"
                label="Tournament Address"
                type="name"
                fullWidth
              />
              <TextField
                autoFocus
                onChange={this.handleChange('playersCount')}
                margin="normal"
                id="playersCount"
                label="Number of Players"
                type="name"
                fullWidth
              />
              
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSubmit} color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
