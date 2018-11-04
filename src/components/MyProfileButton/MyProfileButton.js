
import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase";
import Button from "@material-ui/core/Button";



class MyProfileButton extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return this.state.user ? (
      
        
          <Button>
            <Link
              to={{
                pathname: `/PlayerView/${this.state.user.uid}`,
                state: { playerId: this.state.user.uid }
              }}
            >
              My profile
            </Link>
          </Button>
         
    ) : (
        null
      );
  }
}

export default MyProfileButton;