import {Router} from 'express';
import StoreController from '../controllers/StoreController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.post(
    '/create',
    authMiddleware,
    roleMiddleware('admin'),
    StoreController.createStore.bind(StoreController)
);

router.get(
    "/",
    authMiddleware,
    roleMiddleware('admin', 'manager'),
    StoreController.getStores.bind(StoreController)
);

export default router;