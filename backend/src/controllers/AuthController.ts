import {Request, Response} from 'express';
import AuthService from '../services/AuthService';
import {hashPin} from '../utils/pinHash';

class AuthController {
    async login(req: Request, res: Response){
        try {
            const {staffId, pin} = req.body;

            const result = await AuthService.login(staffId, pin);
            return res.json(result);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async registerStaff(req: Request, res: Response){
        try {
            const {staffId, name, pin, role, storeId} = req.body;

            const pinHash = await hashPin(pin);

            const user = await AuthService.registerStaff({
                staffId,
                name,
                role,
                storeId,
                pinHash,
            });

            return res.json(user);
        } catch (err: any){
            return res.status(400).json({error: err.message})
        }
    }
}

export default new AuthController();