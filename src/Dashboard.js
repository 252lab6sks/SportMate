import React, {Component} from 'react';
import './Dashboard.css';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';


class Dashboard extends Component {

	state = {
		
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
                            <Button color="inherit">Logout</Button>
                           </Grid>
                           
	                   </Grid>
	                </Toolbar>
	            </AppBar>

                <div style = {styles.card}>
                    <Paper rounded elevation2>
                        <div>Hey</div>
                    </Paper>
                </div>

                <div style = {styles.card}>
                    <Paper rounded elevation2>
                        <div>Hey</div>
                    </Paper>
                </div>



		    </div>
		);
	}
}

const styles = {

 card:{
    marginTop: 10,
    marginBottom:10,
    marginLeft: 5,
    marginRight: 5,
 },   
 
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
