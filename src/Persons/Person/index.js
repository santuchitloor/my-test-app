import React from 'react';
import store from '../../rootStore';
import './index.css'

const person = props => {

    const { id, firstName, lastName, age, email, edit } = props;
    return (
        <div className='card-body'>
            <div style={{ verticalAlign: 'bottom' }}>
                <h1 style={{ float: 'left' }}>{firstName}&nbsp;{lastName}</h1>
                <button style={{ float: 'right' }} type='button' onClick={() => edit(id)}>Edit</button>
                <button style={{ float: 'right' }} type='button' onClick={() => { store.userEventStore.deletedUsers.push(id) }}>Delete</button>
                <div style={{ clear: 'both' }}></div>
            </div>
            <p>{age}</p>
            <p>{email}</p>
        </div>
    )
}

export default person;
