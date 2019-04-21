import React, {Component} from 'react';
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import {auth} from './base';
import logo from './assets/SportMate Transparent Icon.png';
import axios from 'axios'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';

class Dashboard extends Component {

	state = {
		
	};

	render() {
		return(
	        <div >
	            <AppBar position="static">
	                <Toolbar>
	                    <div className={styles.bar}>
	                    <Typography variant="h6" color="inherit" className={styles.grow}>
	                        Dashboard
	                    </Typography>
	                    <Button color="inherit">Logout</Button>
	                    </div>
	                </Toolbar>
	            </AppBar>
		    </div>
		);
	}
}

const styles = {
 bar: {
     flex: 1,
     flexDirection: 'row',
 },
 root: {
    flex: 3,
  },
  grow: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },

};

export default Dashboard;
