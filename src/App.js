import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import SignInForm from './SignInForm';
import Dashboard from './Dashboard';

class App extends Component {

	constructor(props) {
		super(props);

		//binding child handler
		this.SignInHandler = this.SignInHandler.bind(this);
	}

	state = {
		email: '',
		uid: '',
		loggedIn: false,
	};

	SignInHandler (status) {
		this.setState(
			{
				email: status.email,
				uid: status.uid,
				loggedIn: status.loggedIn,
			}
		);
	};

	render() {
		if(!this.state.loggedIn)
		{
			return <SignInForm SignInHandler={this.SignInHandler}/>;
		}
		else
		{
			return <Dashboard/>;
		}
	}
}

export default App;
