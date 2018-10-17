import React, { Component } from 'react';
import PropTypes from "prop-types";
import "./HomeInfo.css";
class HomeInfo extends Component {
    static propTypes = {
      
      };
    render() { 
        return ( 

        <header className="HomeInfo-Header">
            <h1 className="HomeInfo-H1">Enter the Tournament and Have Some Fun!</h1>
        </header>
         );
    }
}
 
export default HomeInfo;