import React, { Component } from 'react';
import './PlayerHeaderView.css'

class PlayerHeaderView extends Component {
    render() {
        return (
            <header className="playerHeader">
                <h1>Header</h1>
                <div className="player-container">
                    <img src="http://placehold.jp/150x150.png" alt="User Avatar" />
                    <div>
                        <h2 className="nick">Nick Name</h2>
                        <h2>Karol</h2>
                    </div>
                </div>
            </header>
        );
    }
}

export default PlayerHeaderView;