import { observable, computed } from 'mobx'

const INITIAL_STATE = [{
    id: 1,
    firstName: 'Michel',
    lastName: 'Cook',
    age: 35,
    email: 'cook.michel35@yahoo.com'
},
{
    id: 2,
    firstName: 'Thomas',
    lastName: 'Cook',
    age: 32,
    email: 'cook.thomas@rediff.com'
},
{
    id: 3,
    firstName: 'Mitchel',
    lastName: 'Johnson',
    age: 34,
    email: 'mitchel.johnson@gmail.com'
}];

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable users = INITIAL_STATE;

    @computed get VisibleUsers() {
        console.log(this.rootStore.userEventStore.deletedUsers);
        console.log('filtered users:', this.users.filter(user => this.rootStore.userEventStore.deletedUsers.indexOf(id => id === user.id) === -1))
        return this.users.filter(user => this.rootStore.userEventStore.deletedUsers.indexOf(id => id === user.id) === -1);
    };
}

export default UserStore;
