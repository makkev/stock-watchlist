import React, { Component } from 'react';

class Watchlist extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div className="container mt-3">
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>Stock</th>
                <th>ASX Code</th>
              </tr>
            </thead>
            <tbody>
              {this.props.watchlist.map((rec) => (
                <tr key={rec.code}>
                  <td>{rec.stock}</td>
                  <td>{rec.code}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default Watchlist;