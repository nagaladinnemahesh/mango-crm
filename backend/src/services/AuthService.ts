import UserRepository from '../repositories/UserRepository';
import {comparePin} from '../utils/pinHash';
import {generateToken} from '../utils/jwt';
import {IUser} from '../interfaces/IUser';

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

    async registerStaff(data: IUser){
        const exists = await UserRepository.findByStaffId(data.staffId);
        if (exists) throw new Error('staff ID already exists');

        return UserRepository.createUser(data);
    }
}

export default new AuthService();