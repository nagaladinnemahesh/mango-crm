import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export default async function mongoLoader(){
    try{
        const uri = process.env.MONGO_URI as string;

        await mongoose.connect(uri);
        console.log('MongoDB connected successfully');
    } catch(err){
        console.error('MongoDB connection error:', err);
        process.exit(1);
    }
}