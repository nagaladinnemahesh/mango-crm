import UserRepository from '../repositories/UserRepository';
import StoreRepository from '../repositories/StoreRepository';

class StaffService {
    async assignStore(staffId: string, storeId: string){
        const staff = await UserRepository.findByStaffId(staffId);
        if (!staff) throw new Error('Staff not found');

        const store = await StoreRepository.findById(storeId);
        if (!store) throw new Error("Store not found");

        const updated = await UserRepository.updateStore(staffId, storeId);
        return updated;
    }
}

export default new StaffService();