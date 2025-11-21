import StoreStock from '../models/StoreStock';

class StoreStockRepository {
    async addStock(storeId: string, productId: string, sku: string, qty: number){
        let record = await StoreStock.findOne({storeId, productId});

        if (!record){
            record = new StoreStock({
                storeId,
                productId,
                sku,
                quantity: qty
            });
        } else {
            record.quantity += qty;
        }

        return record.save();
    }

    async reduceStock(storeId: string, productId: string, qty: number){
        const record = await StoreStock.findOne({storeId, productId});
        if(!record) throw new Error('Product not found in store stock');

        if (record.quantity < qty){
            throw new Error ('Insufficient stock');
        }

        record.quantity -= qty;
        return record.save()
    }

    async getStoreStock(storeId: string){
        return StoreStock.find({storeId});
    }
}

export default new StoreStockRepository();