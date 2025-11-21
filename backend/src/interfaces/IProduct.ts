export interface IProduct {
    _id?: string;
    name: string;
    sku?: string;
    price: number;
    category?: string;
    brand?: string;
    description?: string;
    createdAt?: Date;
    updatedAt?: Date;
}