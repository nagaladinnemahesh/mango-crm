import BillRepository  from "../repositories/BillRepository";
import CustomerRepository from "../repositories/CustomerRepository";
import {IBill} from '../interfaces/IBill';
import StaffController from "../controllers/StaffController";

class BillingService {
    async createBill(customerId: string, staff: any, amount: number, items: any[]){
        const customer = await CustomerRepository.findByPhone(customerId);
        if (!customer) throw new Error('Customer not found');

        if (!staff.storeId){
            throw new Error('staff not assigned to any store');
        }

        // creating bill

        const bill = await BillRepository.create({
            customerId,
            staffId: staff.staffId,
            storeId: staff.storeId,
            amount,
            items
        });

        // updating custome visit count

        customer.totalVisits = (customer.totalVisits || 0) + 1;
        customer.lastVisit = new Date();
        await customer.save();

        return bill;
    }

    async getStoreBills(storeId: string){
        return BillRepository.findByStore(storeId);
    }

    async getCustomerBills(customerId: string){
        return BillRepository.findByCustomer(customerId);
    }
}

export default new BillingService();