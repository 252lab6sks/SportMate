import React, {Component} from 'react';
import SignInForm from './SignInForm';
import Dashboard from './Dashboard';

class App extends Component {

	state = {
		email: '',
		uid: '',
	};

	componentDidMount(){
		// try{
		// 	 axios.get('https://cors-anywhere.herokuapp.com/https://us-central1-sportmate-9e1cf.cloudfunctions.net/createUser').then((response) => {
      	// 		console.log("response "+ response.data)
    	// })
		// }catch(err){
		// 	console.log("error "+err)
		// }

		

		

		
		
	}

	//binding to this when sending to child because setting state of parent
	SignInHandler(status) {
		this.setState({
				email: status.email,
				uid: status.uid,
			}
		);
	};

	render() {
		var loggedIn = localStorage.getItem('loggedIn');
		console.log('login: ' + loggedIn);
		if (loggedIn === 'false' || loggedIn == null) {
			return <SignInForm SignInHandler={this.SignInHandler.bind(this)}/>;
		} else {
			return <Dashboard SignInHandler={this.SignInHandler.bind(this)} userDetails={this.state}/>;
		}
	}
}

export default App;
