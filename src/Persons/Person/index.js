import React from 'react';
import './index.css'

const person = props => {
    
    const { id, firstName, lastName, age, email, edit } = props;
    return (
        <div className='card-body'>
            <div style={{verticalAlign: 'bottom'}}>
                <h1 style={{float: 'left'}}>{firstName}&nbsp;{lastName}</h1>
                <button style={{float: 'right'}} type='button' onClick={() => edit(id)}>Edit</button>
                <div style={{clear:'both'}}></div>
            </div>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default person;
