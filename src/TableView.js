import React, { Component } from "react";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";

let id = 0;

function createData(obj) {
	id += 1;
	let sport = obj.sport;
	let location = obj.location;
	let capacity = obj.capacity;
	let time = obj.time;
	let host = obj.host;
	let people = obj.people;
	return { id, sport, location, capacity, time, host, people };
}

class TableView extends Component {
	state = {};

	getTableComponent(row) {
		return (
			<ExpansionPanel style={{ width: 900 }}>
				<ExpansionPanelSummary>
					<Grid
						justify="space-between"
						alignItems="left"
						container
						spacing={24}>

						<Grid item>
							<Typography align="left">
								{row.sport}
							</Typography>
						</Grid>
						<Grid item>
							<Typography align="left">
								{row.location}
							</Typography>
						</Grid>
						<Grid item>
							<Typography align="left">
								{row.capacity}
							</Typography>
						</Grid>
						<Grid item>
							<Typography align="left">
								{row.time}
							</Typography>
						</Grid>
						<Grid item>
							<Typography align="left">
								{row.host}
							</Typography>
						</Grid>
					</Grid>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					{this.getPeople(row.people)}
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	}

	getPeople(people){
		return people.map(person => this.getPerson(person));
	}

	getPerson(person){
		return(
			<Typography>
				{person}
          	</Typography>
		);
	}

	loadEvents = () => {

		var rows = [];
		if (this.props.events && this.props.type && this.props.email) {
			if (this.props.type == 'created') {
				Object.keys(this.props.events).forEach((key, index) => {
					if (this.props.events[key].host == this.props.email) {
						let row = createData(this.props.events[key]);
						rows.push(row);
					}
				}
				);
			} 
			else if (this.props.type == 'joined') {
				Object.keys(this.props.events).forEach((key, index) => {
					Object.keys(this.props.events[key].people).forEach((key_child, index_child) => {
						if (this.props.events[key].people[key_child] == this.props.email &&
							this.props.events[key].host != this.props.email) {
							let row = createData(this.props.events[key]);
							rows.push(row);
						}
					}
					);
				}
				);
			} 
			else {
				Object.keys(this.props.events).forEach((key, index) => {
					let row = createData(this.props.events[key]);
					rows.push(row);
				});
			}

			return (rows.map(row => this.getTableComponent(row)));
		}
	}

	render() {
		return (
			<div>
				<ExpansionPanel style={{ width: 900, backgroundColor: "black" }}>
					<ExpansionPanelSummary>
						<Grid
							justify="space-between"
							alignItems="left"
							container
							spacing={24}>

							<Grid item>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Sport
								</Typography>
							</Grid>
							<Grid item>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Location
								</Typography>
							</Grid>
							<Grid item>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Capacity
								</Typography>
							</Grid>
							<Grid item>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Time
								</Typography>
							</Grid>
							<Grid item>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Host
								</Typography>
							</Grid>
						</Grid>
					</ExpansionPanelSummary>
				</ExpansionPanel>
				{this.loadEvents()}
			</div>
		);
	};
}

export default TableView;
