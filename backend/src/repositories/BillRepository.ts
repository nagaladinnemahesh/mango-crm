import Bill from '../models/Bill';
import {IBill} from '../interfaces/IBill';

class BillRepository {
    async create (data: IBill){
        const bill = new Bill(data);
        return bill.save();
    }

    async findByCustomer(customerId: string){
        return Bill.find({customerId}).sort({createdAt: -1});
    }

    async findByStore(storeId: string){
        return Bill.find({storeId}).sort({createdAt: -1});
    }
}

export default new BillRepository();