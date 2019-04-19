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
    };

    createUser = (email, password) => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });

    };

    signIn = (email, password) => {
        auth.signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response)
            })
            .catch(error => {
                console.log(error)
            });
    };


    render() {
        return (
            <div>
                <Paper className="paper">

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="email"> Email Address </InputLabel>
                        <Input id="email" name="email" autoComplete="email" autoFocus
                               onChange={event => {
                                   this.setState({email: event.target.value});
                               }}/>
                    </FormControl>

                    <FormControl margin="normal" required fullWidth>
                        <InputLabel htmlFor="password"> Password </InputLabel>
                        <Input name="password" type="password" id="password" autoComplete="current-password"
                               onChange={event => {
                                   this.setState({password: event.target.value});
                               }}/>
                    </FormControl>

                    <div className="buttonSeparator"/>

                    <Button fullWidth variant="contained" color="primary"
                            onClick={() => this.signIn(this.state.email, this.state.password)}> Log in </Button>
                    <div className="buttonSeparator"/>
                    <Button fullWidth variant="contained" color="primary"
                            onClick={() => this.createUser(this.state.email, this.state.password)}> Sign up </Button>
                </Paper>
            </div>
        );

    }
}

export default App;
