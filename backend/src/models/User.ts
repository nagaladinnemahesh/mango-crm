import mongoose, {Schema, Document}  from 'mongoose';
import {IUser} from '../interfaces/IUser';

export interface IUserDocument extends IUser, Document{}

const UserSchema = new Schema<IUserDocument>(
    {
        staffId: {type: String, required: true, unique: true},
        name: {type: String, required: true},
        pinHash: {type: String, required: true},
        role: {
            type: String,
            enum: ['admin','manager','staff'],
            default: 'staff',
        },
        storeId: {type: String},
    },
    {timestamps: true}
);

export default mongoose.model<IUserDocument>('User',UserSchema);