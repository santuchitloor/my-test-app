import { observable } from 'mobx';

class UserEvents {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable deletedUsers = [];
}

export default UserEvents;
