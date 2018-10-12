import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './PlayerInfo.css'

class PlayerInfo extends Component {

    static propTypes = {
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired
    }

    render() {
        return (
            <header className="playerHeader">
                <div className="player-container">
                    <img className="player-image" src={this.props.image} alt="User Avatar" />
                    <div>
                        <h2>Player:</h2>
                        <h2 className="nick">{this.props.name}</h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default PlayerInfo;