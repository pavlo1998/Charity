import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from '@material-ui/core';
import './StylesCalc.css'

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
  root1: {
    flexGrow: 1,
    '& > * + *': {
      marginLeft: theme.spacing(6),
    },
  },
}));

export default function NaviBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" id='navbar' >
        <Toolbar>
          
          <Typography variant="h6" className={classes.title}>
          CharityWorld
          </Typography>
          <Typography className={classes.root1}>
              <Link href="#" id="navLink">
                Допомога
              </Link>
              <Link href="#" id="navLink">
                Про нас
              </Link>
              <Link href="#" id="navLink" >
                Підтримка сайту
              </Link>
          </Typography>
          <Button color="inherit">LogIn</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
