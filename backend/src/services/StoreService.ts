import StoreRepository from "../repositories/StoreRepository";
import {IStore} from '../interfaces/IStore';

class StoreService{
    async createStore(data: IStore){
        return StoreRepository.create(data);
    }

    async getStores(){
        return StoreRepository.findAll();
    }
}

export default new StoreService();