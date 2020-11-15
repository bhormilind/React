import React, { Component } from 'react'
import Child from './child';

export default class parent extends Component {

    constructor() {
        super();

        this.state = {
            name : 'Parent'
        }

        this.greetParent = this.greetParent.bind(this);

    }

    greetParent(childName) {
        alert(`Hello ${this.state.name} from ${childName}`);
    }

    render() {
        return (
            <div>
                <Child greetHandler={this.greetParent}/>
            </div>
        )
    }
}
