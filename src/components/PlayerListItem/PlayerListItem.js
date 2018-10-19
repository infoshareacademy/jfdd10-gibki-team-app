import React, { Component } from 'react'
import { Link } from "react-router-dom";
import PropTypes from 'prop-types'
import './PlayerListItem.css'
 
class PlayerListItem extends Component {
     static propTypes = {
        name: PropTypes.string,
        id: PropTypes.number,
        image: PropTypes.string

    }
     render() {
        return (
            <div className="list">
            <p className="name">{ this.props.name}</p>
            <button><Link to={{
            pathname: `/PlayerView/${this.props.id}`,
            state: {playerId: this.props.id}
          }
          }>Player Info</Link></button>
            <img className="avatar" src={this.props.image} alt='player avatar'>
            
            </img>
            </div>
            
          
        )
    }
}
 export default PlayerListItem 

//  "/PlayerView/:playerId"