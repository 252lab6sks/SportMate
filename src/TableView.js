import React, { Component } from "react";
import "./Dashboard.css";
import { Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

// TODO: SET MIN/MAX TABLE WIDTH VALUES

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
					<div style={{ alignContent: "row" }}>
						{this.getPeople(row.people)}
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};

	getPeople(people) {
		console.log(people)
		var peopleName = [];
		Object.keys(people).forEach((key, index) => {
			peopleName.push(people[key])
		})

		return (
			peopleName.map(p =>
				<div>
					<Typography>{p}</Typography>
				</div>
			)
		)
	};

	loadEvents = () => {
		var rows = [];
		if (this.props.events && this.props.type && this.props.email) {
			if (this.props.type == "created") {
				this.props.events.map(event => {
					if (event.host == this.props.email) {
						rows.push(event);
					}
				});
			}
			else if (this.props.type == "joined") {
				this.props.events.map(event => {
					Object.keys(event.people).forEach((key, index) => {
						if (event.people[key] == this.props.email && event.people[key] != event.host) {
							rows.push(event);
						}
					})
				});
			}
			else {
				rows = this.props.events;
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
