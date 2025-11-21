import {Request, Response} from 'express';
import ProductService from '../services/ProductService';

class ProductController {
    async addProduct(req: Request, res: Response){
        try{
            const {name, price, category, brand, description} = req.body;

            if(!name || !price){
                return res.status(400).json({error: 'Name and price are required'});
            }

            const product = await ProductService.addProduct({
                name,
                price,
                category,
                brand,
                description
            })

            return res.json(product)
        } catch(err: any){
            return res.status(400).json({error: err.message});
        }
    }

    async getProducts(req: Request, res: Response){
        const products = await ProductService.getProducts();
        return res.json(products);
    }

    async searchProducts(req: Request, res: Response){
        const {q} = req.query;
        const products = await ProductService.searchProducts(q as string);
        return res.json(products);
    }

    async getBySku(req: Request, res: Response){
        const {sku} = req.params;
        const product = await ProductService.getBySku(sku);
        return res.json(product);
    }
}

export default new ProductController();