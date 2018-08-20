import React, { Component } from 'react';
import Title from './components/Title';
import LightSwitch from './components/LightSwitch';
import Name from './components/name';
import UserBoard from './components/UserBoard';
import User from './components/User';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <main>
        <Title content="Some Simple Title" />  
        <LightSwitch />
        <Name names = "User Board"/>
        <UserBoard/>
       
        
        
        
        </main>
      </div>
    );
  }
}

export default App;
