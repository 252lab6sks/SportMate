import React, {Component} from 'react';
import SignInForm from './SignInForm';
import Dashboard from './Dashboard';

class App extends Component {

	state = {
		email: '',
		uid: '',
		loggedIn: false,
	};

	//binding to this when sending to child because setting state of parent
	SignInHandler(status) {
		this.setState(
			{
				email: status.email,
				uid: status.uid,
				loggedIn: status.loggedIn,
			}
		);
	};

	render() {
		var loggedIn = localStorage.getItem('loggedIn');
		console.log(loggedIn);
		if (loggedIn === 'false') {
			return <SignInForm SignInHandler={this.SignInHandler.bind(this)}/>;
		} else {
			return <Dashboard/>;
		}
	}
}

export default App;
