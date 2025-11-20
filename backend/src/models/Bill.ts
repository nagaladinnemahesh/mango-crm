import mongoose, {Schema, Document} from 'mongoose';
import {IBill} from '../interfaces/IBill';

export interface IBillDocument extends IBill, Document {}

const BillSchema = new Schema<IBillDocument>(
    {
        customerId: {type: String, required: true},
        storeId: {type: String, required: true},
        staffId: {type: String, required: true},
        amount: {type: Number, required: true},
        items: {type: Array, default:[]}
    },
    {timestamps: true}
);

export default mongoose.model<IBillDocument>('Bill', BillSchema);
