import UserStore from './Persons/store';
import UserEventStore from './Persons/Person/store';

class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
        this.userEventStore = new UserEventStore(this);
    }
}

const storeObject = new RootStore();

export default storeObject;
