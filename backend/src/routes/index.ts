import {Router} from 'express';
import authRoutes from './auth.routes';
import storeRoutes from './store.routes';
import staffRoutes from './staff.routes';
import customerRoutes from './customer.routes';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.use('/auth', authRoutes);
router.use('/stores', storeRoutes);
router.use('/staff', staffRoutes);
router.use('/customers', customerRoutes);

router.get(
    '/protected',
    authMiddleware,
    roleMiddleware('admin'),
    (req,res) => {
        res.json({message: 'Admin access granted', user: req.user})
    }
)

export default router;