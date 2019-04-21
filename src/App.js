import React, {Component} from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import SignInForm from './SignInForm';

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

	dashboard = () => {
		return(
			<div>
				<Paper>
					<h1>Hey</h1>
				</Paper>
			</div>
		);
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
			return this.dashboard();
		}
	}
}

export default App;
