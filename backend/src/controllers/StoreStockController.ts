import {Request, Response} from 'express';
import StoreStockService from '../services/StoreStockService';

class StoreStockController {
    async addStock(req: Request, res: Response){
        try{
            const {sku, quantity} = req.body;

            const storeId = req.body.storeId || req.user?.storeId; // admins can send storeId, staff uses own

            const result = await StoreStockService.addStock(storeId, sku, quantity);

            return res.json(result);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getStoreStock(req: Request, res: Response){
        try{
            const storeId = req.user!.storeId;
            const result = await StoreStockService.getStoreStock(storeId);

            return res.json(result);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }
}

export default new StoreStockController();