export interface IStoreStock{
    _id?: string;
    storeId: string;
    productId: string;
    sku: string;
    quantity: number;
    lastUpdated?: Date;
}

