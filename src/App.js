import React, { Component } from 'react';
import './App.css';
import myImage from "./basketball.png"
import Sky from 'react-sky';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {auth, db} from './base';

class App extends Component {

	state = {
		email: '',
		password: '',
	};

	render() {
		return (
			<div>
				<Paper className="paper">

					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="email"> Email Address </InputLabel>
						<Input id="email" name="email" autoComplete="email" autoFocus
				            onChange={event => this.setState({email: event.target.value})}/>
					</FormControl>

					<FormControl margin="normal" required fullWidth>
						<InputLabel htmlFor="password"> Password </InputLabel>
						<Input name="password" type="password" id="password" autoComplete="current-password"
							onChange={event => this.setState({password: event.target.value})}/>
					</FormControl>

					<div className="buttonSeparator"/>

					<Button fullWidth variant="contained" color="primary"
					        onClick={() => { console.log(this.state.email + " " + this.state.password); }}> Sign in </Button>

				</Paper>
			</div>
		);
	}
}

export default App;
