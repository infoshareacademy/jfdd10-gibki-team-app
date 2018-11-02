import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Link } from "react-router-dom";
import "./TournamentListItem.css";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class ControlledExpansionPanels extends React.Component {
  static propTypes = {
    tournament: PropTypes.shape(PropTypes.object)
  };

  state = {
    expanded: null
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  getAvailablePlaces = (number, size) => {
    const placesArray = [];

    for(let i = 1; i <= size; i ++) {
      if (i <= number) {
        placesArray.push(true);
      }
      else{
        placesArray.push(false)
      }
    }
    return placesArray
  }

  render() {
    const { classes } = this.props;
    const { expanded } = this.state;

    return (
      <ExpansionPanel
        expanded={expanded === this.props.tournament.id}
        onChange={this.handleChange(this.props.tournament.id)}
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>
            {this.props.tournament.name}
          </Typography>
          <Typography className={classes.secondaryHeading}>
            {this.props.tournament.date}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {this.props.tournament.description}
            <br />
            <br />
            Places available:{" "}
            {this.props.tournament.placesAvailable === this.props.tournament.placesOccupied
              ? "none"
              : this.getAvailablePlaces(
                  this.props.tournament.placesOccupied,
                  this.props.tournament.placesAvailable
                ).map(
                  (el, index) =>
                    el === true ? <span key={index}>&#x25C6;</span> : <span key={index}>&#x25C7;</span>
                )}
            <Button >
              <Link
                to={{
                  pathname: `/TournamentView/${this.props.tournament.id}`,
                  state: { tournamentId: this.props.tournament.id }
                }}
              >
                Details
              </Link>
            </Button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  }
}

ControlledExpansionPanels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ControlledExpansionPanels);
