import React , { Component } from 'react';

class Header extends Component {
    
   

    render() {

        //Destructuring orgName varriable from 'props' object
        const { orgName } = this.props;
        return <h1> {orgName} Ecosystem </h1>;
    }

}


export default Header;