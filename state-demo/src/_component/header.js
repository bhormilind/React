import React, { Component } from 'react';

class Header extends Component {

    constructor() {
        super();

        this.state = {
            message: 'Welcome to Milind\'s ecosystem'
        }
    }
    changeMessage() {
        console.clear();
        console.log(' ChangeMessage clicked . . . ');
        this.setState({
            message: 'Thank you for Subscribing'
        })
    }
    render() {
        return (<div>
            <h1>{this.state.message}</h1>
            <button onClick= {() => this.changeMessage()}>Subscribe </button>
            </div>);
    }
}

export default Header;