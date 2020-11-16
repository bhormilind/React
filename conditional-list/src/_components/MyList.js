import React from 'react'

function MyList() {

    const myNames = ['a','b','c','d'];

    const nameList = myNames.map(n => <h3 key={n}>{n}</h3>);

    return (
        <div>
            {nameList}        
        </div>
    )
}

export default MyList
