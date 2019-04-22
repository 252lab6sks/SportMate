import React, { Component } from "react";
import "./Dashboard.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Button } from "@material-ui/core";

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
}

class TableView extends Component {
	state = {};

	render() {
		return (
			<Table className={styles.table}>
				<TableHead>
					<TableRow style={{ backgroundColor: "black", height: 35 }}>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
							Sport
            			</TableCell>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="right">
							Location
            			</TableCell>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="right">
							Capacity
            			</TableCell>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="right">
							Time
            			</TableCell>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="right">
							Host
            			</TableCell>
						<TableCell style={{ color: "white", fontWeight: "bold", fontSize: 20 }} align="right"/>
					</TableRow>
				</TableHead>
				
				<TableBody>
					{rows.map(row => (
						<TableRow
							key={row.id}
							style={{ backgroundColor: "white", height: 35 }}>

							<TableCell component="th" scope="row">{row.name}</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
							<TableCell align="right">
								<Button>
									Details
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		);
	}
}

const styles = {
	table: {
		minWidth: 700
	},
};

export default TableView;
