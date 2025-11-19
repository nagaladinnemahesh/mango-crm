import Store from '../models/Store';
import {IStore} from '../interfaces/IStore';

class StoreRepository {
    async create(data: IStore){
        const store = new Store(data);
        return store.save();
    }

    async findAll(){
        return Store.find();
    }

    async findById(id: string){
        return Store.findById(id);
    }
}

export default new StoreRepository();