export interface ICustomer {
    _id?: string;
    name: string;
    phone: string;
    totalVisits?: number;
    lastVisit?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}