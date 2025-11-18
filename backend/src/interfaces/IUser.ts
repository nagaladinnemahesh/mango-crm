export interface IUser {
    _id?: string;
    staffId: string;
    name: string;
    pinHash: string;
    role: 'admin' | 'manager' | 'staff';
    storeId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}