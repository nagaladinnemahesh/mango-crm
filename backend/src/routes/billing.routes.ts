import {Router} from 'express';
import BillingController from '../controllers/BillingController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// staff creates bills
router.post('/create', authMiddleware, BillingController.createBill.bind(BillingController));

// staff sees store bills
router.get('/store', authMiddleware, BillingController.getStoreBills.bind(BillingController));

// search customer billing history
router.get('/customer/:phone', authMiddleware, BillingController.getCustomerBills.bind(BillingController));

export default router;
