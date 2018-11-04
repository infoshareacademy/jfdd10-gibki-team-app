
import React, { Component } from "react";
import firebase from "firebase";
import Button from "@material-ui/core/Button";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";

class AuthComponent extends Component {
  state = {
    user: null,
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  render() {
    return this.state.user ? (
      <strong>
        <p style={{margin: '0px'}}>
          
          {this.state.user.email}{" "}
          <Button onClick={() => firebase.auth().signOut()}>Sign out</Button>
        </p>
        {this.props.children}
      </strong>
    ) : (
        <>
          <SignIn />
          <SignUp />





        </>
      );
  }
}

export default AuthComponent;