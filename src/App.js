import React, { Component } from 'react';
import './main.scss';
import { UserForm } from './assets/components/userForm.js';


class App extends Component {
  render() {
    return (
      <div style={{fontWeight:"bold"}}>
        <img src={require('./assets/images/logo.png')} className="app" alt="logo"></img>
        <div className="container">
          <UserForm/>
        </div>
      </div>
    );
  }
}

export default App;

