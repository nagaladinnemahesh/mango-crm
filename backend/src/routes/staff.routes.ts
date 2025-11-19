import {Router} from 'express';
import StaffController from '../controllers/StaffController';
import { authMiddleware } from '../middleware/authMiddleware';
import { roleMiddleware } from '../middleware/roleMiddleware';

const router = Router();

router.post(
    '/assign-store',
    authMiddleware,
    roleMiddleware('admin'),
    StaffController.assignStore.bind(StaffController)
)

export default router;