import {Router} from 'express';
import ProductController from '../controllers/ProductController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

// only admins can add products
router.post(
    '/add',
    authMiddleware,
    roleMiddleware('admin'),
    ProductController.addProduct.bind(ProductController)
);

// any logged in user can view or search
router.get('/', authMiddleware, ProductController.getProducts.bind(ProductController));
router.get('/search', authMiddleware, ProductController.searchProducts.bind(ProductController));
router.get('/:sku', authMiddleware, ProductController.getBySku.bind(ProductController));

export default router;