
import React, { Component } from "react";
import firebase from "firebase";


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
      <>
        <p>
          {this.state.user.email}{" "}
          <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </p>
        {this.props.children}
      </>
    ) : (
      <>
        <SignIn />
        <SignUp />
        

        
        
      </>
    );
  }
}

export default AuthComponent;