import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Watchlist from './Watchlist';


class App extends Component {
  state = {
    watchlist: [
      {
        "stock": "Asaleo Care",
        "code": "AHY",
      },
      {
        "stock": "TPG Telecom",
        "code": "TPM",
      },
      {
        "stock": "Pact Group",
        "code": "PGH",
      },
      {
        "stock": "Wesfarmers",
        "code": "WES",
      },
      {
        "stock": "National Australia Bank",
        "code": "NAB",
      },
    ]
  }
  render() {
    return (
      <Watchlist watchlist={this.state.watchlist} />
    );
  }
}

export default App;
