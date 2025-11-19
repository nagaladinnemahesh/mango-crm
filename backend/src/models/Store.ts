import mongoose, {Schema, Document} from 'mongoose';
import {IStore} from '../interfaces/IStore';

export interface IStoreDocument extends IStore, Document {}

const StoreSchema = new Schema<IStoreDocument>(
    {
        name: {type: String, required: true},
        location: {type: String, required: true}
    },
    {timestamps: true}
);

export default mongoose.model<IStoreDocument>('Store', StoreSchema);