import {Request, Response} from 'express';
import StoreService from '../services/StoreService';

class StoreController{
    async createStore(req: Request, res: Response){
        try {
            const {name, location} = req.body;

            const store = await StoreService.createStore({name, location});
            return res.json(store);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getStores(req: Request, res: Response){
        try {
            const stores = await StoreService.getStores();
            return res.json(stores);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }
}

export default new StoreController();
