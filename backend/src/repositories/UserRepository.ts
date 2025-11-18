import User from '../models/User';
import {IUser} from '../interfaces/IUser';

class UserRepository{
    async findByStaffId(staffId: string){
        return User.findOne({staffId});
    }

    async createUser(data: IUser){
        const user = new User(data);
        return user.save();
    }
}

export default new UserRepository();