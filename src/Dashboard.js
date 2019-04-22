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
import TableView from './TableView';
import { db } from './base';

class Dashboard extends Component {

	state = {
		email: '',
		uid: '',
		value: 0,
		addEventState: false,

		sport: '',
		location: '',
		capacity: '',
		time: '',
		host: '',
	};

	componentWillMount() {
		this.setState({
			email: localStorage.getItem('email'),
			uid: localStorage.getItem('uid'),
		})
	}

	handleChange = (event, value) => {
		this.setState({ value: value });
	};

	addEventOpen() {
		this.setState({ addEventState: true });
	};

	addEventClose() {
		this.setState({ addEventState: false });
	};

	eventSubmit() {
		var ref = db.ref("events/").push();
		var eventID = ref.key;


		db.ref("events/" + eventID + "/").set({
			sport: this.state.sport,
			location: this.state.location,
			capacity: this.state.capacity,
			time: this.state.time,
			people: { "1": `${this.state.email}` }

		}).then((data) => console.log("Added to db")).catch((error) => console.log(error));
	};

	render() {
		return (
			<div>
				<AppBar position="static" style={{ background: "#7D19E5" }}>
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
								<Button style={{ color: "#7D19E5", backgroundColor: "#FCD704" }} color="inherit"
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
					{/* <Paper> */}
					<AppBar position="static">
						<div style={{ backgroundColor: "#7D19E5" }}>
							<Grid
								justify="space-between"
								alignItems="center"
								container
								spacing={24}>

								<Grid item style={{ margin: 10, marginLeft: 20 }}>
									<Typography variant="h6" color="inherit" align="left">
										Your Events
										</Typography>
								</Grid>

								<Grid item style={{ marginTop: "auto", marginBottom: "auto", marginRight: 20 }}>
									<Button style={{ color: "#7D19E5", backgroundColor: "#FCD704" }} color="inherit"
										onClick={() => { this.addEventOpen() }}>Add Event</Button>
								</Grid>
							</Grid>
						</div>
						<Tabs variant="fullWidth" value={this.state.value} onChange={this.handleChange}
							style={{ background: "#7D19E5" }}>
							<Tab label="You created" />
							<Tab label="You joined" />
						</Tabs>
					</AppBar>
					{this.state.value === 0 && <TableView />}
					{this.state.value === 1 && <TableView />}
					{/* </Paper> */}
				</div>

				<div style={styles.card}>
					<AppBar position="static">
						<div style={{ backgroundColor: "#7D19E5" }}>
							<Grid
								justify="space-between"
								alignItems="center"
								container
								spacing={24}>

								<Grid item style={{ margin: 10, marginLeft: 20 }}>
									<Typography variant="h6" color="inherit" align="left">
										All Events
									</Typography>
								</Grid>
							</Grid>
						</div>
					</AppBar>
					<TableView/>
				</div>

				<Modal open={this.state.addEventState} onClose={this.addEventClose.bind(this)}>
					<h2>Add Event</h2>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}>
							<InputLabel> Sport </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({ sport: event.target.value });
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Location </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({ location: event.target.value });
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Capacity </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({ capacity: event.target.value });
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Time </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({ time: event.target.value });
							}}
							/>
						</FormControl>
						<FormControl style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}>
							<InputLabel> Host </InputLabel>
							<Input style={{ width: 300 }} onChange={event => {
								this.setState({ host: event.target.value });
							}}
							/>
						</FormControl>

						<Button style={{ color: "#7D19E5", backgroundColor: "#FCD704", marginTop: 30, marginLeft: 20, marginRight: 20 }}
							color="inherit"
							onClick={() => { this.eventSubmit() }}>
							Submit
							</Button>
					</div>
				</Modal>
				<div style={{ height: 100 }} />
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
