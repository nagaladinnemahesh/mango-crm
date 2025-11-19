import CustomerRepository from "../repositories/CustomerRepository";
import { ICustomer } from "../interfaces/ICustomer";

class CustomerService {
    async addCustomer(data: ICustomer){
        const exists = await CustomerRepository.findByPhone(data.phone);
        if (exists){
            throw new Error('Customer already exists');
        }

        return CustomerRepository.create(data);
    }

    async getAllCustomers(){
        return CustomerRepository.findAll();
    }

    async searchCustomer(phone: string){
        return CustomerRepository.findByPhone(phone);
    }
}

export default new CustomerService();