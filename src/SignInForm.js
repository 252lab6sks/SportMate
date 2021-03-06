import React, {Component} from 'react';
import './SignInForm.css';
import Paper from '@material-ui/core/Paper';
import logo from "./assets/SportMate Transparent Icon.png";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { auth,functions } from "./base";

class SignInForm extends Component {

	state = {
		email: '',
		password: '',
		uid: '',
	};
	


	createUser = async(email, password) => {

		auth.createUserWithEmailAndPassword(email, password)
			.then((response) => {

				console.log(response);

				this.setState({
					email: response.user.email,
					uid: response.user.uid
				});

				this.setLocalValues("true");
				this.props.SignInHandler(this.state);
			})
			.catch(error => {
				console.log(error)
			});
	};

	signIn = (email, password) => {


		
		auth.signInWithEmailAndPassword(email, password)
			.then((response) => {

				console.log(response);

				this.setState({
					email: response.user.email,
					uid: response.user.uid
				});

				this.setLocalValues("true");
				this.props.SignInHandler(this.state);
			})
			.catch(error => {
				console.log(error)
			});
	};

	setLocalValues(loggedIn) {
		localStorage.setItem('loggedIn', loggedIn);
		localStorage.setItem('email', this.state.email);
		localStorage.setItem('uid', this.state.uid);
		console.log("setting: " + localStorage.getItem('email'));
	};

	enterPress(event) {
		if(event.keyCode === 13) {
			this.signIn(this.state.email, this.state.password);
		}
	};

	render() {
		return (
			<div style={styles.mainDivStyle} className={"mainDiv"}>
				<div style={{height: 80}}/>
				<Paper style={styles.paperStyle} className={"paper"}>

					<img src={logo} alt={""} style={{width: 250, height: 250}}/>

					<FormControl style={styles.emailInputStyle} className={"formStyle"} margin="normal" required
					             fullWidth>
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
						       }}
						       onKeyDown={event => this.enterPress(event)}/>
					</FormControl>

					<Button style={styles.loginButtonStyle} variant="contained" color="primary"
					        onClick={() => this.signIn(this.state.email, this.state.password)}> Log in </Button>

					<Button style={styles.signUpButtonStyle} variant="contained" color="primary"
					        onClick={() => this.createUser(this.state.email, this.state.password)}> Sign up </Button>
				</Paper>
			</div>
		);
	}
};

const styles = {

	mainDivStyle: {
		backgroundColor: "#fefefe",
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
		backgroundColor: "#7D19E5",
	},

	signUpButtonStyle: {
		marginTop: 10,
		marginBottom: 16,
		backgroundColor: "#7D19E5",
	}
};

export default SignInForm;
