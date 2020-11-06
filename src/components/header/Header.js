// React Imports
import React from 'react';

// Material Ui Imports
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

// Styles for AppBAr
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  background:{
      backgroundColor: 'rgb(255, 132, 87)',
  },
}));

// Header Function
export default function Header() {
  // const for using styles
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.background}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            COVID-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}