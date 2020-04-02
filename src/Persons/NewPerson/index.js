import React from 'react';

const newPerson = props => {
    const { firstName, lastName, age, email, id, change, save } = props;
    return (
        <div>
            <div>
                <label>First Name:</label>
                <input type='text'
                    value={firstName} 
                    onChange={(event) => change(id, 'firstName', event.target.value)} />
            </div>
            <div>
                <label>Last Name:</label>
                <input type='text'
                    value={lastName}
                    onChange={(event) => change(id, 'lastName', event.target.value)}  />
            </div>
            <div>
                <label>Age:</label>
                <input type='text'
                    value={age}
                    onChange={(event) => change(id, 'age', event.target.value)}  />
            </div>
            <div>
                <label>Email:</label>
                <input type='text'
                    value={email}
                    onChange={(event) => change(id, 'email', event.target.value)}  />
            </div>
            <button onClick={() => save()} >Done</button>
        </div>
    );
}

export default newPerson;
