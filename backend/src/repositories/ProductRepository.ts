import Product from '../models/Product';
import {IProduct} from '../interfaces/IProduct';

class ProductRepository {
    async createProduct(data: IProduct){
        const product = new Product(data);
        return product.save();
    }

    async findAll(){
        return Product.find();
    }

    async findBySku(sku: string){
        return Product.findOne({sku});
    }

    async searchByName(query: string){
        return Product.find({
            name: {$regex: query, $options: 'i'}
        })
    }
}

export default new ProductRepository();