import React from "react";
import PropTypes from "prop-types";
import moment from "moment";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

import TournamentListItem from "../TournamentListItem/TournamentListItem";
import "./TournamentList.css";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class TabsWrappedLabel extends React.Component {
  state = {
    value: "one",
    tournaments: []
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  componentDidMount() {
    fetch(process.env.PUBLIC_URL + "/data/tournaments.json")
      .then(response => response.json())
      .then(arrayOfTournaments =>
        this.setState({ tournaments: arrayOfTournaments })
      );
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab value="one" label="All" />
            <Tab value="two" label="Active" />
            <Tab value="three" label="Future" />
            <Tab value="four" label="Finished" />
          </Tabs>
        </AppBar>
        {value === "one" && (
          <TabContainer>
            {this.state.tournaments
              .sort((t1, t2) => {
                var firstDate = moment(t1.date, "DD/MM/YYYY");
                var secondDate = moment(t2.date, "DD/MM/YYYY");
                return -firstDate.diff(secondDate);
              })
              .filter(tournament => {
                return this.props.playerId === undefined
                  ? true
                  : tournament.playersIds.includes(this.props.playerId);
              })
              .map(tournament => (
                <div className="tournamentListContainer" key={tournament.id}>
                  <TournamentListItem tournament={tournament || {}} />
                </div>
              ))}
          </TabContainer>
        )}
        {value === "two" && (
          <TabContainer>
            {this.state.tournaments
              .filter(tournament => {
                return tournament.status === "active" && {};
              })
              .filter(tournament => {
                return this.props.playerId === undefined
                  ? true
                  : tournament.playersIds.includes(this.props.playerId);
              })
              .map(tournament => (
                <div className="tournamentListContainer" key={tournament.id}>
                  <TournamentListItem tournament={tournament || {}} />
                </div>
              ))}
          </TabContainer>
        )}
        {value === "three" && (
          <TabContainer>
            {this.state.tournaments
              .filter(tournament => {
                return tournament.status === "future" && {};
              })
              .filter(tournament => {
                return this.props.playerId === undefined
                  ? true
                  : tournament.playersIds.includes(this.props.playerId);
              })
              .map(tournament => (
                <div className="tournamentListContainer" key={tournament.id}>
                  <TournamentListItem tournament={tournament || {}} />
                </div>
              ))}
          </TabContainer>
        )}
        {value === "four" && (
          <TabContainer>
            {this.state.tournaments
              .filter(tournament => {
                return tournament.status === "finished" && {};
              })
              .filter(tournament => {
                return this.props.playerId === undefined
                  ? true
                  : tournament.playersIds.includes(this.props.playerId);
              })
              .map(tournament => (
                <div className="tournamentListContainer" key={tournament.id}>
                  <TournamentListItem tournament={tournament || {}} />
                </div>
              ))}
          </TabContainer>
        )}
      </div>
    );
  }
}

TabsWrappedLabel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TabsWrappedLabel);
