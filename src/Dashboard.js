import React, { Component } from "react";
import "./Dashboard.css";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Modal from 'react-responsive-modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

class Dashboard extends Component {

	state = {
		email: '',
		uid: '',
		value: 0,
		addEventState: false
	};

	handleChange = (event, value) => {
		this.setState({value: value});
	};

	addEventOpen() {
		this.setState({addEventState: true});
	};
	
	addEventClose() {
		this.setState({ addEventState: false });
	};

	render() {
		return (
			<div>
				<AppBar position="static" style={{background: "#7D19E5"}}>
					<Toolbar>
						<Grid
							justify="space-between"
							container
							spacing={24}>

							<Grid item>
								<Typography variant="h6" color="inherit" align="left">
									SportMate
								</Typography>
							</Grid>

							<Grid item>
								<Button style={{color: "#7D19E5", backgroundColor: "#FCD704"}} color="inherit"
								        onClick={() => {
									        localStorage.setItem('loggedIn', 'false');
									        this.setState({
										        email: '',
										        uid: ''
									        });
									        this.props.SignInHandler(this.state);
								        }}>
									Logout</Button>
							</Grid>

						</Grid>
					</Toolbar>
				</AppBar>

				<div style={styles.card}>
					<Paper>
						<AppBar position="static">
							<div style={{backgroundColor: "#7D19E5"}}>
								<Grid
									justify="space-between"
									alignItems="center"
									container
									spacing={24}>

									<Grid item style={{margin: 10, marginLeft: 20}}>
										<Typography variant="h6" color="inherit" align="left">
											Your Events
										</Typography>
									</Grid>

									<Grid item style={{marginTop: "auto", marginBottom: "auto", marginRight: 20}}>
										<Button style={{color: "#7D19E5", backgroundColor: "#FCD704"}} color="inherit"
											onClick={() => { this.addEventOpen()}}>Add Event</Button>
									</Grid>
								</Grid>
							</div>
							<Tabs variant="fullWidth" value={this.state.value} onChange={this.handleChange}
							      style={{background: "#7D19E5"}}>
								<Tab label="You created"/>
								<Tab label="You joined"/>
							</Tabs>
						</AppBar>
					</Paper>
				</div>

				<div style={styles.card}>
					<Paper>
						<AppBar position="static">
							<div style={{backgroundColor: "#7D19E5"}}>
								<Grid
									justify="space-between"
									alignItems="center"
									container
									spacing={24}>

									<Grid item style={{margin: 10, marginLeft: 20}}>
										<Typography variant="h6" color="inherit" align="left">
											All Events
										</Typography>
									</Grid>
								</Grid>
							</div>
						</AppBar>
					</Paper>
				</div>

				<Modal open={this.state.addEventState} onClose={this.addEventClose.bind(this)} center>
					<h2>Add Event</h2>
					<FormControl style={{ width: 500 }} margin="normal" required fullWidth>
						<InputLabel> Sport </InputLabel>
						<Input onChange={event => {
							this.setState({});
						}}
						/>
					</FormControl>
					<FormControl style={{ width: 500 }} margin="normal" required fullWidth>
						<InputLabel> Location </InputLabel>
						<Input onChange={event => {
							this.setState({});
						}}
						/>
					</FormControl>
					<FormControl style={{ width: 500 }} margin="normal" required fullWidth>
						<InputLabel> Capacity </InputLabel>
						<Input onChange={event => {
							this.setState({});
						}}
						/>
					</FormControl>
					<FormControl style={{ width: 500 }} margin="normal" required fullWidth>
						<InputLabel> Time </InputLabel>
						<Input onChange={event => {
							this.setState({});
						}}
						/>
					</FormControl>
					<FormControl style={{ width: 500 }} margin="normal" required fullWidth>
						<InputLabel> Host </InputLabel>
						<Input onChange={event => {
							this.setState({});
						}}
						/>
					</FormControl>
				</Modal>

			</div>
		);
	}
}

const styles = {

	card: {
		marginTop: 20,
		marginLeft: 'auto',
		marginRight: 'auto',
		width: 900,
	},

	bar: {
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
