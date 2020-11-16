import React from 'react'

function MyList() {

    const myNames = ['a','b','c','d'];

    return (
        <div>
            {myNames.map(n => <h3>{n}</h3>)}        
        </div>
    )
}

export default MyList
