import jwt from 'jsonwebtoken';
import {IUser} from '../interfaces/IUser';

const JWT_SECRET = process.env.JWT_SECRET as string;

export const generateToken = (user: IUser) => {
    return jwt.sign(
        {
            _id: user._id,
            staffId: user.staffId,
            role: user.role,
            storeId: user.storeId,
        },
        JWT_SECRET,
        {expiresIn: '1d'}
    )
}

