import UserRepository from '../repositories/UserRepository';
import {comparePin} from '../utils/pinHash';
import {generateToken} from '../utils/jwt';
import {IUser} from '../interfaces/IUser';
import User from '../models/User';
import { generateStaffId } from '../utils/generateStaffId';

class AuthService {
    async login (staffId: string, pin: string){
        const user = await UserRepository.findByStaffId(staffId);
        if (!user){
            throw new Error('Invalid staffId or pin');
        }

        const isMatch = await comparePin(pin, user.pinHash);
        if (!isMatch){
            throw new Error('Invalid staffId or pin');
        }

        const token = generateToken(user);

        return {
            token,
            user:{
                staffId: user.staffId,
                name: user.name,
                role: user.role,
                storeId: user.storeId,
            }
        }
    }

    async registerStaff(data: any){

        if (!data.pin) throw new Error('PIN is required')

        // generate new staff Id automatically
        const staffId = await generateStaffId(User);

        // hashing pin
        const pinHash = await import ('../utils/pinHash').then(m => m.hashPin(data.pin));

        // const exists = await UserRepository.findByStaffId(staffId);
        // if (exists){
        //     throw new Error('Auto generatedstaff ID already exists');
        // } 

        const userData = {
        staffId,          
        name: data.name,
        pinHash,
        role: data.role,
        storeId: null
    };

        return UserRepository.createUser(userData);
    }
}

export default new AuthService();