import StoreStockRepository from "../repositories/StoreStockRepository";
import Product from '../models/Product';

class StoreStockService{
    async addStock(storeId: string, sku: string, qty: number){
        const product = await Product.findOne({sku});
        if(!product) throw new Error('Product not found');

        return StoreStockRepository.addStock(storeId, product._id, sku, qty);
    }

    async getStoreStock(storeId: string){
        return StoreStockRepository.getStoreStock(storeId);
    }
}

export default new StoreStockService();