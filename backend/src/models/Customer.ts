import mongoose, {Schema, Document} from 'mongoose';
import {ICustomer} from '../interfaces/ICustomer';

export interface ICustomerDocument extends ICustomer, Document {}

const CustomerSchema = new Schema<ICustomerDocument>(
    {
        name: {type: String, required: true},
        phone: {type: String, required: true},
        totalVisits: {type: Number, default: 0},
        lastVisit: {type: Date, default: null}
    },
    {timestamps: true}
);

export default mongoose.model<ICustomerDocument>('Customer', CustomerSchema);