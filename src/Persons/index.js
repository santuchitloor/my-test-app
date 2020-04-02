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
            action: '',
            person: {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                age: 0
            }
        }
    }

    editHandler = id => {
        const { PersonList } = this.state;
        const item = PersonList.find(p => p.id === id);
        this.setState({ person: item, action: 'edit' });
    }

    updateHandler = (id, property, value) => {
        console.log(property);
        console.log(value);
        const { PersonList, person, action } = this.state;
        if (action === 'edit') {
            const index = PersonList.findIndex(p => p.id === id);
            PersonList[index][property] = value;
            this.setState({ PersonList })
        }
        if (action === 'add') {
            person[property] = value;
            this.setState({ person });
        }
    }

    saveHandler = () => {
        const { action, PersonList, person } = this.state;
        if (action === 'add') {
            person.id = Math.max.apply(Math, PersonList.map(function (o) { return o.id; })) + 1;
            PersonList.push(person);
        }
        this.setState({
            action: '',
            person: {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                age: 0
            }
        })
    }

    addHandler = () => {
        this.setState({
            person: {
                id: 0,
                firstName: '',
                lastName: '',
                email: '',
                age: 0
            },
            action: 'add'
        });
    }

    render() {
        const { PersonList, person, action } = this.state;
        return (
            <>
                {PersonList.length > 0 && action === '' &&
                    <>
                        <button type='button' onClick={this.addHandler}>New</button>
                        <div className='card'>
                            {PersonList.map((p, index) =>
                                <Person {...p}
                                    edit={this.editHandler}
                                    key={index}
                                />)}
                        </div>
                    </>
                }
                {action !== '' && <NewPerson {...person}
                    change={this.updateHandler}
                    save={this.saveHandler}
                />}
            </>
        )
    }
}

export default Persons;