import React from 'react';


const Greet = (props) => {

    // way - 2 : Destrcturing varriables from 'prop' object
    const {name, nickName, children} = props;
    return (
        <div>
            <h3> Welcome {name} a.k.a {nickName} </h3>
            {children}
        </div>
    )};

export default Greet;