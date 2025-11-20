import {Request, Response} from 'express';
import BillingService from '../services/BillingService';

class BillingController {
    async createBill(req: Request, res: Response){
        try{
            const {customerPhone, amount, items} = req.body;

            const staff = req.user!;

            const bill = await BillingService.createBill(
                customerPhone,
                staff,
                amount,
                items || []
            );

            return res.json(bill);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getStoreBills(req: Request, res: Response){
        try{
            const storeId = req.user!.storeId!;
            const bills = await BillingService.getStoreBills(storeId);
            return res.json(bills);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getCustomerBills(req: Request, res: Response){
        try{
            const {phone} = req.params;
            const bills = await BillingService.getCustomerBills(phone);
            return res.json(bills);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }
}

export default new BillingController();