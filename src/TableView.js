import React, { Component } from "react";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

let id = 0;

// TODO: SET MIN/MAX TABLE WIDTH VALUES

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
			<ExpansionPanel style={{ width: "100%" }}>
				<ExpansionPanelSummary>
					<Typography align="left" style={{ width: tableValues.sport }}>
						{row.sport}
					</Typography>
					<Typography align="left" style={{ width: tableValues.location }}>
						{row.location}
					</Typography>
					<Typography align="left" style={{ width: tableValues.capacity }}>
						{row.capacity}
					</Typography>
					<Typography align="left" style={{ width: tableValues.time }}>
						{row.time}
					</Typography>
					<Typography align="left" style={{ width: tableValues.host }}>
						{row.host}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					{this.getPeople(row.people)}
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};

	getPeople(people) {
		return (
			<div style={{ alignContent: "row" }}>
				{people.map(person => this.getPerson(person))}
			</div>
		);
	};

	getPerson(person) {
		return (
			<Typography>
				{person}
			</Typography>
		);
	};

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
	};

	render() {
		return (
			<div>
				<ExpansionPanel style={{ width: "100%", backgroundColor: "black" }}>
					<ExpansionPanelSummary>
						<Typography style={{ width: tableValues.sport, color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
							Sport
						</Typography>
						<Typography style={{ width: tableValues.location, color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
							Location
						</Typography>
						<Typography style={{ width: tableValues.capacity, color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
							Capacity
						</Typography>
						<Typography style={{ width: tableValues.time, color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
							Time
						</Typography>
						<Typography style={{ width: tableValues.host, color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
							Host
						</Typography>
					</ExpansionPanelSummary>
				</ExpansionPanel>
				{this.loadEvents()}
			</div>
		);
	};
}

const tableValues = {
	sport: "12.9%",
	location: "35.2%",
	capacity: "13.1%",
	time: "20.5%",
	host: "20.3%",
};

export default TableView;
