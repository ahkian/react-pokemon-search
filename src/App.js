import React, { Component } from 'react';
import logo from './images/logo.svg';
import './stylesheets/App.css';
import pokelogo from './images/pokemon.png'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={pokelogo} className="Pokelogo" alt="Pokemon logo"/>
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to the React Pokedex</h1>
          </div>
        </header>
        <body>


        </body>
      </div>
    );
  }
}

export default App;
