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

const isNotDeleted = deletedUsers => user => (
    deletedUsers.indexOf(user.id) === -1
)

class UserStore {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable users = INITIAL_STATE;

    @computed get VisibleUsers() {
        const { deletedUsers } = this.rootStore.userEventStore;
        return this.users.filter(isNotDeleted(deletedUsers));
    };
}

export default UserStore;
