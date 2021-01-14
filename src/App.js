import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import Apps from './Apps.jsx'
import logo from './assets/logo.png';

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  logo: {
    height: "4em"
  }
}))

function App() {

const classes = useStyles()
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar >

          <img  alt="launchpad logo" className= {classes.logo} src = {logo} />
        
        </Toolbar>
      </AppBar>
      
    </div>
    
  )
}

export default App;