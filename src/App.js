import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Watchlist from './Watchlist';


class App extends Component {
  state = require('./data.json');
  render() {
    return (
      <Watchlist watchlist={this.state.watchlist} />
    );
  }
}

export default App;
