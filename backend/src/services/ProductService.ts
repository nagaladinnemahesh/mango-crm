import ProductRepository from "../repositories/ProductRepository";
import Product from "../models/Product";
import { generateSku } from "../utils/generateSku";
import {IProduct} from '../interfaces/IProduct';

class ProductService{
    async addProduct(data: IProduct){
        const sku = await generateSku(Product);

        return ProductRepository.createProduct({
            ...data,
            sku
        })
    }

    async getProducts(){
        return ProductRepository.findAll();
    }

    async searchProducts(name: string){
        return ProductRepository.searchByName(name);
    }

    async getBySku(sku: string){
        return ProductRepository.findBySku(sku);
    }
}

export default new ProductService();