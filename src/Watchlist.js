import React, { Component } from 'react';

class Watchlist extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <th>Stock</th>
              <th>ASX Code</th>
            </tr>
            {this.props.watchlist.map((rec) => (
              <tr key={rec.code}>
                <td>{rec.stock}</td>
                <td>{rec.code}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Watchlist;