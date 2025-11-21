import mongoose, {Schema, Document} from 'mongoose';
import {IStoreStock} from '../interfaces/IStoreStock';

export interface IStoreStockDocument extends IStoreStock, Document{}

const StoreStockSchema = new Schema<IStoreStockDocument>(
    {
        storeId: {type: String, required: true},
        productId: {type: String, required: true},
        sku: {type: String, required: true},
        quantity: {type: Number, default: 0}
    },
    {timestamps: true}
);

export default mongoose.model<IStoreStockDocument>('StoreStock', StoreStockSchema);