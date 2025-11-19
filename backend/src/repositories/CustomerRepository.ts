import Customer from '../models/Customer';
import { ICustomer } from '../interfaces/ICustomer';

class CustomerRepository{
    async create(data: ICustomer){
        const customer = new Customer(data);
        return customer.save();
    }

    async findByPhone(phone: string){
        return Customer.findOne({phone});
    }

    async findAll(){
        return Customer.find();
    }
}

export default new CustomerRepository();