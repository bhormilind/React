import React from 'react';


const Greet = (props) => {
    return (
        <div>
            <h3> Welcome {props.name} a.k.a {props.nickName} </h3>
            {props.children}
        </div>
    )};

export default Greet;