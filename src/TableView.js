import React, { Component } from "react";
import "./Dashboard.css";
import { Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { functions } from './base';


// TODO: SET MIN/MAX TABLE WIDTH VALUES

class TableView extends Component {
	state = {};

	getButton(type, eid) {
		if (type == "all") {
			return (
				<Button
					style={{ color: "#7D19E5", backgroundColor: "#FCD704" }}
					onClick={() => {
						try {
							var getData = functions.httpsCallable("joined");
							console.log(eid);
							getData({ data: eid, email: this.props.email }).then(result => {
								console.log(result.data.success);
							});
						} catch (error) {
							console.log("error " + error);
						}
					}}>
					JOIN
				</Button>
			)
		} else if (type == "created") {
			return (
				<Button
					style={{color: "#7D19E5", backgroundColor: "#FCD704"}}
					onClick={() => {
						try {
							var getData = functions.httpsCallable("delete");
							getData({data: eid}).then(result => {
								console.log(result.data.success);
							});
						} catch (error) {
							console.log("error " + error);
						}
					}}>
					COMPLETE
				</Button>
			)
		}
	}

	getTableComponent(row, type) {
		return (
			<ExpansionPanel style={{ width: "100%" }}>
				<ExpansionPanelSummary>
					<Typography 
						align="left" 
						style={{ minWidth: 75, width: tableValues.sport }}>
						{row.sport}
					</Typography>
					<Typography 
						align="left" 
						style={{ minWidth: 100, width: tableValues.location }}>
						{row.location}
					</Typography>
					<Typography 
						align="left" 
						style={{ minWidth: 63, width: tableValues.time }}>
						{row.time}
					</Typography>
					<Typography 
						align="left" 
						style={{ minWidth: 70,width: tableValues.host }}>
						{row.host}
					</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<div style={{ alignContent: "row" }}>
						{this.getPeople(row.people)}
						{this.getButton(type, row.eid)}
					</div>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
	};

	getPeople(people) {
		var peopleName = [];
		Object.keys(people).forEach((key, index) => {
			peopleName.push(people[ key ])
		});
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
			} else if (this.props.type == "joined") {
				this.props.events.map(event => {
					Object.keys(event.people).forEach((key, index) => {
						if (event.people[ key ] == this.props.email && event.people[ key ] != event.host) {
							rows.push(event);
						}
					})
				});
			} else {
				this.props.events.map(event => {
					if (event.host != this.props.email) {
						let flag = 0;
						Object.keys(event.people).forEach((key, index) => {
							if (event.people[ key ] == this.props.email) {
								flag = 1;
							}
						});
						if (flag == 0) {
							rows.push(event);
						}
					}
				});
			}

			return (rows.map(row => this.getTableComponent(row, this.props.type)));
		}
	};

	render() {
		return (
			<div>
				<ExpansionPanel style={{ width: "100%", backgroundColor: "black" }}>
					<ExpansionPanelSummary>
						<Typography
							style={{ minWidth: 75, width: tableValues.sport, color: "white", fontWeight: "bold", fontSize: 20 }}
							align="left">
							Sport
						</Typography>
						<Typography
							style={{ minWidth: 100, width: tableValues.location, color: "white", fontWeight: "bold", fontSize: 20 }}
							align="left">
							Location
						</Typography>
						<Typography
							style={{ minWidth: 63, width: tableValues.time, color: "white", fontWeight: "bold", fontSize: 20 }}
							align="left">
							Time
						</Typography>
						<Typography
							style={{ minWidth: 70, width: tableValues.host, color: "white", fontWeight: "bold", fontSize: 20 }}
							align="left">
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
	sport: "15.9%",
	location: "38.2%",
	time: "24.5%",
	host: "23.3%",
};

export default TableView;
