import {Router} from 'express';
import StoreStockController from '../controllers/StoreStockController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

 router.post(
    '/add',
    authMiddleware,
    roleMiddleware('admin','manager'),
    StoreStockController.addStock.bind(StoreStockController)
 );

 // get stock of the store(staff/manager)

 router.get(
    '/',
    authMiddleware,
    StoreStockController.getStoreStock.bind(StoreStockController)
 );

 export default router;