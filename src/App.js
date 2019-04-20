import React, {Component} from 'react';
import './App.css';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {auth} from './base';

class App extends Component {

	state = {
		email: '',
		password: '',
		uid: '',
		loggedIn: false
	};

	createUser = (email, password) => {
		auth.createUserWithEmailAndPassword(email, password)
			.then((response) => {
				console.log(response);
				this.setState({
					loggedIn: true,
					uid: response.user.uid
				});
			})
			.catch(error => {
				console.log(error)
			})
		;
	};

	signIn = (email, password) => {
		auth.signInWithEmailAndPassword(email, password)
			.then((response) => {
				console.log(response);
				this.setState({
					loggedIn: true,
					uid: response.user.uid
				});
			})
			.catch(error => {
				console.log(error)
			});
	};

	signInForm = () => {
		return(
			<div style={styles.mainDivStyle} className={"mainDiv"}>
				<Paper style={styles.paperStyle} className={"paper"}>

					<FormControl style={styles.emailInputStyle} classname={"formStyle"} margin="normal" required fullWidth>
						<InputLabel htmlFor="email"> Email Address </InputLabel>
						<Input id="email" name="email" autoComplete="email" autoFocus
						       onChange={event => {
							       this.setState({email: event.target.value});
						       }}/>
					</FormControl>

					<FormControl style={styles.passInputStyle} margin="normal" required fullWidth>
						<InputLabel htmlFor="password"> Password </InputLabel>
						<Input name="password" type="password" id="password" autoComplete="current-password"
						       onChange={event => {
							       this.setState({password: event.target.value});
						       }}/>
					</FormControl>

					<Button style={styles.loginButtonStyle} variant="contained" color="primary"
					        onClick={() => this.signIn(this.state.email, this.state.password)}> Log in </Button>

					<Button style={styles.singUpButtonStyle} variant="contained" color="primary"
					        onClick={() => this.createUser(this.state.email, this.state.password)}> Sign up </Button>
				</Paper>
			</div>
		);
	};

	dashboard = () => {
		return(
			<div>
				<Paper>
					<h1>Hey</h1>
				</Paper>
			</div>
		);
	};

	render() {
		if(!this.state.loggedIn)
		{
			return this.signInForm();
		}
		else
		{
			return this.dashboard();
		}
	}
}

const styles = {

	mainDivStyle: {
		backgroundColor: "#ffffff",
	},

	paperStyle: {
		width: 500
	},

	emailInputStyle: {
		marginTop: 40,
		width: 420,
	},

	passInputStyle: {
		width: 420,
	},

	loginButtonStyle: {
		marginTop: 15,
	},

	singUpButtonStyle: {
		marginTop: 10,
		marginBottom: 16
	}
};

export default App;
