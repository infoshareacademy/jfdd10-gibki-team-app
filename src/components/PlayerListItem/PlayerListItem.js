import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import "./PlayerListItem.css";

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            {props.name}
          </Typography>
          <img className="avatar" src={props.image} alt="player avatar" style={{ width: 50, height: 50 }}/>
          <Button color="inherit" className="PlayerInfo-button">
            <Link
              to={{
                pathname: `/PlayerView/${props.id}`,
                state: { playerId: props.id }
              }}
            >
              Player info
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  image: PropTypes.string
};

export default withStyles(styles)(ButtonAppBar);
