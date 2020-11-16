import React from 'react'

function MyListAdvChild(p) {
   const {name, age, place}  = p.props;
    return (
        <div>
            <h6>My Name is {name} and I am {age} years old and lives in {place}</h6>
        </div>
    )
}

export default MyListAdvChild
