import {Router} from 'express';
import CustomerController from '../controllers/CustomerController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

// staff/manager/admin can add customers
router.post(
    '/add',
    authMiddleware,
    CustomerController.addCustomer.bind(CustomerController)
);

router.get(
    '/',
    authMiddleware,
    CustomerController.getCustomers.bind(CustomerController)
);

router.get(
    '/search/:phone',
    authMiddleware,
    CustomerController.searchCustomer.bind(CustomerController)
);

export default router;