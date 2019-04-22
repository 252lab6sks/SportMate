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
import TableView from './TableView'

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
						{this.state.value === 0 && <TableView/>}
						{this.state.value === 1 && <TableView/>}
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
							<TableView/>
						</AppBar>
					</Paper>
				</div>

				<Modal open={this.state.addEventState} onClose={this.addEventClose.bind(this)}>
					<h2>Add Event</h2>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}>
							<InputLabel> Sport </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({});
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Location </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({});
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Capacity </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({});
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Time </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({});
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Host </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({});
							}}
							/>
						</FormControl>

						<Button style={{ color: "#7D19E5", backgroundColor: "#FCD704", marginTop: 30, marginLeft: 20, marginRight: 20 }}
								color="inherit"
								onClick={() => {
									localStorage.setItem('loggedIn', 'false');
									this.setState({
										email: '',
										uid: ''
									});
									this.props.SignInHandler(this.state);
							}}>
							Submit</Button>
					</div>
				</Modal>

			</div>
		);
	}
}

const styles = {
	table: {
		minWidth: 700
	},

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

	addEventInputStyle: {
		marginTop: 30,
		marginLeft: 15,
		marginRight: 15,
	}
};

export default Dashboard;
