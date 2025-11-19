import {Router} from 'express';
import authRoutes from './auth.routes';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.use('/auth', authRoutes);

router.get(
    '/protected',
    authMiddleware,
    roleMiddleware('admin'),
    (req,res) => {
        res.json({message: 'Admin access granted', user: req.user})
    }
)

export default router;