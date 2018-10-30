import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeView from "../HomeView/HomeView";
import TournamentView from "../TournamentView/TournamentView";
import PlayerView from "../PlayerView/PlayerView";
import PlayersView from "../PlayersView/PlayersView";
import "./App.css";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const THEME = createMuiTheme({
  typography: {
    useNextVariants: true,
   "fontFamily": "-apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\",\"Ubuntu\", \"Cantarell\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif",
   "fontSize": 18,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  },
  overrides: {
    MuiButton: {
      root: {
        backgroundColor: '#6573c3',
        '&:hover': {
          backgroundColor: '#2c387e'
      }
      },
    },

  }
});

const theme = createMuiTheme({
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      // Name of the rule
      root: {
        // Some CSS
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={THEME}>
        <Router>
          <div className="App">
            <Route exact path="/" component={HomeView} />
            <Route
              path="/TournamentView/:tournamentId"
              component={TournamentView}
            />
            <Route path="/PlayerView/:playerId" component={PlayerView} />
            <Route exact path="/PlayersView" component={PlayersView} />
          </div>
        </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
