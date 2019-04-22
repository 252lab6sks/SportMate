import React, { Component } from "react";
import "./Dashboard.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button, Typography } from "@material-ui/core";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Grid from "@material-ui/core/Grid";

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9)
];

let id = 0;
function createData(name, calories, fat, carbs, protein) {
	id += 1;
	return { id, name, calories, fat, carbs, protein };
};

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

						<Grid item style={{ margin: 10, marginLeft: 20 }}>
							<Typography align="left">
								Sport
							</Typography>
						</Grid>
						<Grid item style={{ margin: 10, marginLeft: 20 }}>
							<Typography align="left">
								Location
							</Typography>
						</Grid>
						<Grid item style={{ margin: 10, marginLeft: 20 }}>
							<Typography align="left">
								Capacity
							</Typography>
						</Grid>
						<Grid item style={{ margin: 10, marginLeft: 20 }}>
							<Typography align="left">
								Time
							</Typography>
						</Grid>
						<Grid item style={{ margin: 10, marginLeft: 20 }}>
							<Typography align="left">
								Host
							</Typography>
						</Grid>
					</Grid>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<Typography>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
						malesuada lacus ex, sit amet blandit leo lobortis eget.
          			</Typography>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		);
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

							<Grid item style={{ margin: 10, marginLeft: 20 }}>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Sport
								</Typography>
							</Grid>
							<Grid item style={{ margin: 10, marginLeft: 20 }}>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Location
								</Typography>
							</Grid>
							<Grid item style={{ margin: 10, marginLeft: 20 }}>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Capacity
								</Typography>
							</Grid>
							<Grid item style={{ margin: 10, marginLeft: 20 }}>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Time
								</Typography>
							</Grid>
							<Grid item style={{ margin: 10, marginLeft: 20 }}>
								<Typography style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="left">
									Host
								</Typography>
							</Grid>
						</Grid>
					</ExpansionPanelSummary>
				</ExpansionPanel>
				{rows.map(row => this.getTableComponent(row))}
			</div>
		);
	}
}

const styles = {
	table: {
		minWidth: 700
	},
};

export default TableView;
