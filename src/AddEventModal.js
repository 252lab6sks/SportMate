import React, { Component } from "react";
import "./Dashboard.css";
import Modal from "react-responsive-modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import { db } from './base';

class AddEventModal extends Component {

	eventSubmit = () => {
		var ref = db.ref("events/").push();
		var eventID = ref.key;

		db.ref("events/" + eventID + "/").set({
			sport: this.props.details.sport,
			location: this.props.details.location,
			capacity: this.props.details.capacity,
			time: this.props.details.time,
			people: { "1": `${this.props.details.email}` },
			host: this.props.details.email

		}).then((data) => {
			console.log("Added to db");
			this.addEventClose();
		}).catch((error) => console.log(error));
	};

	render() {
		return (
			<Modal
				open={this.props.details.addEventState}
				onClose={this.props.addEventClose}>

				<h2>Add Event</h2>
				<div style={{ display: "flex", flexDirection: "column" }}>
					<FormControl
						style={{ marginLeft: 20, marginRight: 20, marginTop: 5 }}
					>
						<InputLabel> Sport </InputLabel>
						<Input
							style={{ width: 300 }}
							onChange={event => {
								this.props.details.sport = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}
					>
						<InputLabel> Location </InputLabel>
						<Input
							style={{ width: 300 }}
							onChange={event => {
								this.props.details.location = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}
					>
						<InputLabel> Capacity </InputLabel>
						<Input
							style={{ width: 300 }}
							onChange={event => {
								this.props.details.capacity = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{ marginLeft: 20, marginRight: 20, marginTop: 15 }}
					>
						<InputLabel> Time </InputLabel>
						<Input
							style={{ width: 300 }}
							onChange={event => {
								this.props.details.time = event.target.value
							}}
						/>
					</FormControl>

					<Button
						style={{
							color: "#7D19E5",
							backgroundColor: "#FCD704",
							marginTop: 30,
							marginLeft: 20,
							marginRight: 20
						}}
						color="inherit"
						onClick={this.eventSubmit}
					>
						Submit
          </Button>
				</div>
			</Modal>
		);
	}
}

const styles = {
	addEventInputStyle: {
		marginTop: 30,
		marginLeft: 15,
		marginRight: 15,
	}
}

export default AddEventModal;
