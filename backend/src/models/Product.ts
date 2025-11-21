import mongoose, {Schema, Document} from 'mongoose';
import {IProduct} from '../interfaces/IProduct';

export interface IProductDocument extends IProduct, Document {}

const ProductSchema = new Schema<IProductDocument>(
    {
        name: {type: String, required: true},
        sku: {type: String, required: true, unique: true},
        price: {type: Number, required: true},
        category: {type: String},
        brand: {type: String},
        description: {type: String}
    },
    {timestamps: true}
);

export default mongoose.model<IProductDocument>('Product', ProductSchema);