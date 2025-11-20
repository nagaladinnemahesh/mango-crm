export interface IBill {
    _id?: string;
    customerId: string;
    storeId: string;
    staffId: string;
    amount: number;
    items?: any[];
    createdAt?: Date;
    updatedAt?: Date;
}