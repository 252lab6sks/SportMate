import React, {Component} from "react";
import "./Dashboard.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const rows = [
	createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
	createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
	createData("Eclair", 262, 16.0, 24, 6.0),
	createData("Cupcake", 305, 3.7, 67, 4.3),
	createData("Gingerbread", 356, 16.0, 49, 3.9)
];

let id = 0;

function createData(sport, location, capacity, time, host) {
	id += 1;
	return {id, sport, location, capacity, time, host};
}

class TableView extends Component {
	state = {
		events: {},
		rows: {}
	};


	loadEvents = () => {
		console.log("after");
		console.log(this.props.events);

		var rows = [];
		if (this.props.events) {
			Object.keys(this.props.events).forEach((key, index) => {
					let row = createData(
						this.props.events[key].sport,
						this.props.events[key].location,
						this.props.events[key].capacity,
						this.props.events[key].time,
						this.props.events[key].host,
					);
					rows.push(row);
				}
			);

			return (
				rows.map(row => (
					<TableRow
						key={row.id}
						style={{backgroundColor: "white", height: 35}}
					>
						<TableCell component="th" scope="row">
							{row.sport.toLocaleUpperCase()}
						</TableCell>
						<TableCell align="right">{row.location}</TableCell>
						<TableCell align="right">{row.capacity}</TableCell>
						<TableCell align="right">{row.time}</TableCell>
						<TableCell align="right">{row.host}</TableCell>
					</TableRow>
				))

			)
		}

	};

	render() {
		return (
			<Table className={styles.table}>
				<TableHead>
					<TableRow style={{backgroundColor: "black", height: 35}}>
						<TableCell
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20
							}}
						>
							Sport
						</TableCell>
						<TableCell
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20
							}}
							align="right"
						>
							Location
						</TableCell>
						<TableCell
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20
							}}
							align="right"
						>
							Capacity
						</TableCell>
						<TableCell
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20
							}}
							align="right"
						>
							Time
						</TableCell>
						<TableCell
							style={{
								color: "white",
								fontWeight: "bold",
								fontSize: 20
							}}
							align="right"
						>
							Host
						</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{this.loadEvents()}
				</TableBody>
			</Table>
		);
	}
}

const styles = {
	table: {
		minWidth: 700
	},

	card: {
		marginTop: 20,
		marginLeft: "auto",
		marginRight: "auto",
		width: 900
	}
};

export default TableView;
