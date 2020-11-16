import React, { Component } from 'react';

export default class MyConditional extends Component {
  constructor() {
    super();

    this.state = {
      isLoggedIn: false,
    };
  }
  render() {
    return this.state.isLoggedIn ? (
      <div>
        <h3> Hello </h3>
      </div>
    ) : (
      <div>
        <h3> Bye </h3>
      </div>
    );
  }
}
