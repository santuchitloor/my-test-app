import React, { Component } from 'react';
import Person from './Person';
import NewPerson from './NewPerson';
import './index.css';
import data from './__mock_data__';

class Persons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PersonList: data,
            edit: false,
            addNew: false,
            editItem: null
        }
    }

    editHandler = id => {
        const { PersonList } = this.state;
        const item = PersonList.find(p => p.id === id);
        this.setState({ editItem: item, edit: true });
    }

    updateHandler = (id, property, value) => {
        const { PersonList } = this.state;
        console.log(value);
        const index = PersonList.findIndex( p => p.id === id);
        PersonList[index][property] = value;
        this.setState({ PersonList })
    }

    render() {
        const { PersonList, editItem, edit } = this.state;
        let list = null;
        let person = null;
        if (editItem && edit) {
            person = (<NewPerson firstName={editItem.firstName}
                lastName={editItem.lastName}
                age={editItem.age}
                email={editItem.email}
                id={editItem.id}
                change={this.updateHandler}
            />);
        }
        if (PersonList.length > 0 && !edit) {
            list = PersonList.map((p, index) =>
                <Person firstName={p.firstName}
                    lastName={p.lastName}
                    id={p.id}
                    email={p.email}
                    age={p.age}
                    edit={this.editHandler}
                    key={index}
                />);
        }
        return (
            <div>
                <div className='card'>
                    {list}
                </div>
                {person}
            </div>
        )
    }
}

export default Persons;