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

    async updateStore(staffId: string, storeId: string){
        return User.findOneAndUpdate(
            {staffId},
            {storeId},
            {new: true}
        )
    }
}

export default new UserRepository();