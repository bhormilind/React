import React , {Component} from 'react';


class Counter extends Component {

    constructor(){
        super();

        this.state = {
            count: 0
        }
    }

    increament() {
        console.log('Increament Button clicked . . . .');
        this.setState((preVal) => ({
            count:  preVal.count + 1
        }), () => {
            console.log(`Callback count : ${this.state.count}`);
        })
    }

    render() {
        return (
            <div>
                <h3> Count : {this.state.count} </h3>
                <button onClick={() => this.increament()}>Increament</button>
            </div>
        );
    }


}

export default Counter;