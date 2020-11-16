import React from 'react';

import MyListAdvChild from './MyListAdvChild';

function MyListAdv() {
    const persons = [
        {
            id: 1,
            name: 'Abc',
            age: 30,
            place: 'pqr'
        },
        {
            id: 2,
            name: 'Abc1',
            age: 28,
            place: 'pqr1'
        },
        {
            id: 3,
            name: 'Abc2',
            age: 22,
            place: 'pqr2'
        },
        {
            id: 4,
            name: 'Abc3',
            age: 25,
            place: 'pqr3'
        },
        {
            id: 5,
            name: 'Abc4',
            age: 26,
            place: 'pqr4'
        }
    ];

    const personList = persons.map(p => <MyListAdvChild key={p.id} props={p} />);
    return (
        <div>
           {personList}
        </div>
    )
}

export default MyListAdv;