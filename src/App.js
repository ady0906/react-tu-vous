import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Tu or Vous ?</h2>
        </div>
        <p className="App-intro">
          A simple app to help you figure out which second person French pronoun you should be using
        </p>
          <MuiThemeProvider>
            <MyAwesomeReactComponent />
          </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
