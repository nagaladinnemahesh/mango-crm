import {Request, Response} from 'express';
import CustomerService from '../services/CustomerService';

class CustomerController {
    async addCustomer (req: Request, res: Response){
        try{
            const {name, phone} = req.body;
            const customer = await CustomerService.addCustomer({
                name,
                phone
            });

            return res.json(customer);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getCustomers(req: Request, res: Response){
        try {
            const customers = await CustomerService.getAllCustomers();
            return res.json(customers);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async searchCustomer(req: Request, res: Response){
        try{
            const {phone} = req.params;

            const customer = await CustomerService.searchCustomer(phone);
            return res.json(customer);
        } catch (err: any){
            return res.status(400).json({error: err.message});
        }
    }
}

export default new CustomerController();