import React, { Component } from "react";
import "./Dashboard.css";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TableView from "./TableView";
import AddEventModal from "./AddEventModal.js";
import { db, functions } from "./base";

class Dashboard extends Component {
	state = {
		email: "",
		uid: "",
		value: 0,
		addEventState: false,
		sport: "",
		location: "",
		time: "",
		host: "",
		events: [],
		date: {}
	};

	componentWillMount() {
		let email = localStorage.getItem("email");
		let uid = localStorage.getItem("uid");

		this.setState({
			email: email,
			uid: uid
		});

		db.ref("/").on("child_changed", snapshot => {
			try {
				var getData = functions.httpsCallable("dataGet");
				getData().then(result => {
					this.setState({
						events: result.data.events
					});
				});
			} catch (error) {
				console.log("error " + error);
			}
		});

		try {
			var getData = functions.httpsCallable("dataGet");
			getData().then(result => {
				this.setState({
					events: result.data.events
				});
			});
		} catch (error) {
			console.log("error " + error);
		}
	}

	handleChange = (event, value) => {
		this.setState({ value: value });
	};

	addEventOpen = () => {
		let date = new Date();
		this.setState({
			addEventState: true,
			sport: "",
			location: "",
			people: {},
			host: "",
			date: date
		});
	};

	addEventClose = () => {
		this.setState({ addEventState: false });
	};

	eventSubmit = () => {
		var ref = db.ref("events/").push();
		var eventID = ref.key;

		db.ref("events/" + eventID + "/")
			.set({
				sport: this.state.sport,
				location: this.state.location,
				time: this.state.time,
				people: { "1": `${this.state.email}` },
				host: this.state.email
			})
			.then(data => {
				console.log("Added to db");
				this.addEventClose();
			})
			.catch(error => console.log(error));
	};

	render() {
		return (
			<div>
				<AppBar position="static" style={{ background: "#7D19E5" }}>
					<Toolbar>
						<Grid justify="space-between" container spacing={24}>
							<Grid item>
								<Typography variant="h6" color="inherit" align="left">
									SportMate
								</Typography>
							</Grid>

							<Grid item>
								<Button
									style={{ color: "#7D19E5", backgroundColor: "#FCD704" }}
									color="inherit"
									onClick={() => {
										localStorage.setItem("loggedIn", "false");
										this.setState({
											email: "",
											uid: ""
										});
										this.props.SignInHandler(this.state);
									}}
								>
									Logout
								</Button>
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>

				<div style={styles.card}>
					<AppBar position="static">
						<div style={{ backgroundColor: "#7D19E5" }}>
							<Grid
								justify="space-between"
								alignItems="center"
								container
								spacing={24}
							>
								<Grid item style={{ margin: 10, marginLeft: 20 }}>
									<Typography variant="h6" color="inherit" align="left">
										Your Events
									</Typography>
								</Grid>

								<Grid
									item
									style={{
										marginTop: "auto",
										marginBottom: "auto",
										marginRight: 20
									}}
								>
									<Button
										style={{ color: "#7D19E5", backgroundColor: "#FCD704" }}
										color="inherit"
										onClick={() => {
											this.addEventOpen();
										}}
									>
										Add Event
									</Button>
								</Grid>
							</Grid>
						</div>
						<Tabs
							variant="fullWidth"
							value={this.state.value}
							onChange={this.handleChange}
							style={{ background: "#7D19E5" }}
						>
							<Tab label="You created" />
							<Tab label="You joined" />
						</Tabs>
					</AppBar>
					{this.state.value === 0 && (
						<TableView
							events={this.state.events}
							type="created"
							email={this.state.email}
						/>
					)}
					{this.state.value === 1 && (
						<TableView
							events={this.state.events}
							type="joined"
							email={this.state.email}
						/>
					)}
				</div>

				<div style={styles.card}>
					<AppBar position="static">
						<div style={{ backgroundColor: "#7D19E5" }}>
							<Grid
								justify="space-between"
								alignItems="center"
								container
								spacing={24}
							>
								<Grid item style={{ margin: 10, marginLeft: 20 }}>
									<Typography variant="h6" color="inherit" align="left">
										All Events
									</Typography>
								</Grid>
							</Grid>
						</div>
					</AppBar>

					<TableView
						events={this.state.events}
						type="all"
						email={this.state.email}
					/>
				</div>

				<AddEventModal
					details={this.state}
					addEventOpen={this.addEventOpen}
					addEventClose={this.addEventClose}
				/>
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
		width: "62%",
		maxWidth: 900,
		minWidth: 550,
	},

	bar: {
		backgroundColor: "#7D19E5"
	},

	root: {
		flex: 3
	},

	grow: {
		flex: 1
	},

	menuButton: {
		marginLeft: -12,
		marginRight: 20
	},

	addEventInputStyle: {
		marginTop: 30,
		marginLeft: 15,
		marginRight: 15
	}
};

export default Dashboard;
