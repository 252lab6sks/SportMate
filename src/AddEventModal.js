import React, {Component} from "react";
import "./Dashboard.css";
import Modal from "react-responsive-modal";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import {db, functions} from './base';
import {DateTimePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

class AddEventModal extends Component {

	state = {
		selectedDate: new Date(),
	};


	eventSubmit = () => {
		var ref = db.ref("events/").push();
		var eventID = ref.key;
		var time = this.formatDate(this.state.selectedDate);

		db.ref("events/" + eventID + "/").set({
			sport: this.props.details.sport,
			location: this.props.details.location,
			capacity: this.props.details.capacity,
			time: time,
			people: {"host": `${this.props.details.email}`},
			host: this.props.details.email,
			eid: eventID

		}).then((data) => {
			console.log("Added to db");

			// try {
			// 	var getData = functions.httpsCallable("joined");
			// 	getData({data: eventID, email: "s@s.com"}).then(result => {
			// 		console.log(result.data.success);
			// 	});
			// } catch (error) {
			// 	console.log("error " + error);
			// }


			this.props.addEventClose();
		}).catch((error) => console.log(error));
	};

	formatDate(date) {
		let monthNames = [
			"January", "February", "March",
			"April", "May", "June", "July",
			"August", "September", "October",
			"November", "December"
		];
		let dayNames = [
			"Mon", "Tue", "Wed",
			"Thu", "Fri", "Sat", "Sun"
		];
		var day = date.getDate();
		var monthIndex = date.getMonth();
		var weekday = date.getDay();
		var hour = (date.getHours() <= 12) ? date.getHours() : date.getHours() - 12;
		hour = (hour === 0) ? 12 : hour;
		var min = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
		var ampm = (date.getHours() < 12) ? 'AM' : 'PM';

		return dayNames[weekday] + ', ' + monthNames[monthIndex] + ' ' + day + ' ' + hour + ':' + min + ' ' + ampm;
	}

	handleDateChange = date => {
		this.setState({selectedDate: date});
		// var formattedDate = this.formatDate(date);
		// this.props.details.time = formattedDate;
	};

	render() {
		return (
			<Modal
				open={this.props.details.addEventState}
				onClose={this.props.addEventClose}>

				<h2>Add Event</h2>
				<div style={{display: "flex", flexDirection: "column"}}>
					<FormControl
						style={{marginLeft: 20, marginRight: 20, marginTop: 5}}
					>
						<InputLabel> Sport </InputLabel>
						<Input
							style={{width: 300}}
							onChange={event => {
								this.props.details.sport = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{marginLeft: 20, marginRight: 20, marginTop: 15}}
					>
						<InputLabel> Location </InputLabel>
						<Input
							style={{width: 300}}
							onChange={event => {
								this.props.details.location = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{marginLeft: 20, marginRight: 20, marginTop: 15}}
					>
						<InputLabel> Capacity </InputLabel>
						<Input
							style={{width: 300}}
							onChange={event => {
								this.props.details.capacity = event.target.value
							}}
						/>
					</FormControl>
					<FormControl
						style={{marginLeft: 20, marginRight: 20, marginTop: 15}}
					>
						<MuiPickersUtilsProvider utils={DateFnsUtils}>
							<DateTimePicker
								margin="normal"
								label="Time picker"
								value={this.state.selectedDate}
								onChange={this.handleDateChange}
								minDate={new Date()}
								maxDate={new Date().setDate(new Date().getDate() + 7)}
							/>
						</MuiPickersUtilsProvider>
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


export default AddEventModal;
