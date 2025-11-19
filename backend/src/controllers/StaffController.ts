import {Request, Response} from 'express';
import StaffService from '../services/StaffService';

class StaffController {
    async assignStore(req: Request, res: Response){
        try {
            const {staffId, storeId} = req.body;
            const result = await StaffService.assignStore(staffId, storeId);
            return res.json({
                message: 'Store assigned successfully',
                user: result
            });
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }
}

export default new StaffController();