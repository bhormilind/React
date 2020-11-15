import React, { Component } from 'react'

export default class EventHandler extends Component {
    
    constructor() {
        super();
        this.state = {
            msg: 'hello'
        }

        //way-4
        this.click4 = this.click4.bind(this);
    }

    // Way1 - Simple way
    click1() {
        console.log('click-1');
    }

    // Way2 - Please see the html by which it is called
    click2() {
        console.log('click-2');

        this.setState((preVal) => ({
            msg: 'Clicked by button 2'
        }))
    }

     // Way3 - Please see the html by which it is called
     // this is the slowest method, so generally avoid it
     // also it would be treacky in case of multiple childs or large applicaiton
    click3() {
        console.log('click-3');
        this.setState((preVal) => ({
            msg: 'Clicked by button 3'
        }))
    }

    //way -4 Constructor event binding. The most preferred way
    click4() {
        console.log('click-4');

        this.setState((preVal) => ({
            msg: 'Clicked by button 4'
        }))
    }

    // way -5 : Very new so not widely used or spreade
    click5 = () => {
        console.log('click-5');

        this.setState((preVal) => ({
            msg: 'Clicked by button 5'
        }));
    }
    
    render() {
        return (
            <div>
                <h2> { this.state.msg} </h2>
                <button onClick={this.click1}>Click-1</button>
                <button onClick={() => this.click2()}>Click-2</button>
                <button onClick={this.click3.bind(this)}>Click-3</button>
                <button onClick={this.click4}>Click-4</button>
                <button onClick={this.click5}>Click-5</button>
            </div>
        )
    }
}

