import React, { Component } from 'react';
import './App.css';
import myImage from "./basketball.png"
import Sky from 'react-sky';
import Button from '@material-ui/core/Button';
import {auth, db} from './base';

class App extends Component {

    state = {

    }

 constructor(props) {
    super(props);
    this.state = {
      email: '', 
      password: '',
    };

  }

  handleChange=(event)=> {
    this.setState({value: event.target.value});
  };

  
  
  render() {
    return (
      <div className="App">
      <div className="App-header">
      
          <div className = "Auth-main-container">
            <form onSubmit={this.handleSubmit}>
              <div className="Text-input-container">
                  <label>
                    Email:
                        <input type="text" value={this.state.email} onChange={(event)=>{
                          this.setState({email: event.target.value})
                        }} />
                  </label>
                  <label>
                    Password:
                        <input type="text" value={this.state.password} onChange={(event)=>{
                          this.setState({password: event.target.value})
                        }} />
                  </label>
              </div>

              

                <div className = "Button-container">
                    <Button class="Button">
                    Sign-In
                    </Button>

                    <Button class="Button">
                    Sign-Up
                    </Button>


                </div>
            </form>
          </div>
       </div> 
        
      <Sky 
          images={{
            0: myImage 
          }}
          how={130} 
          time={40} 
          size={'100px'} 
          background={'black'} 
        />
      
      </div>
      
    );
  }
}

export default App;

