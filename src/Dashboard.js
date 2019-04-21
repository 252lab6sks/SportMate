import React, {Component} from 'react';
import './Dashboard.css';
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
import Grid from '@material-ui/core/Grid';


class Dashboard extends Component {

	state = {
		email: '',
		password: '',
		uid: '',
	};

	render() {
		return(
	        <div >
	            <AppBar position="static" style={{ background: "#7D19E5" }}>
	                <Toolbar>
                        <Grid
                            justify="space-between" 
                            container 
                            spacing={24}
                        >

                        <Grid item>
                            <Typography variant="h6" color="inherit" align="left">
                                SportMate
                            </Typography>
                        </Grid> 
                          
                           <Grid item>
                            <Button color="inherit" onClick={() => {
                            	localStorage.setItem('loggedIn', 'false');
	                            this.setState({
		                            email: '',
		                            uid: ''
	                            });
	                            this.props.SignInHandler(this.state);
                            }}>Logout</Button>
                           </Grid>
                           
	                   </Grid>
	                </Toolbar>
	            </AppBar>
		    </div>
		);
	}
}

const styles = {
 bar:{
     backgroundColor: "#7D19E5",
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
