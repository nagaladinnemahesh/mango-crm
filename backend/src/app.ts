import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import mongoLoader from './loaders/mongoose';
import routes from './routes';
import {errorHandler} from './middleware/errorHandler';

const app = express()

// security middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// rate limiter for login/bruteforce protection

app.use(
    '/auth/login',
    rateLimit({
        windowMs: 1 * 60 * 1000,
        max: 5,
        message: 'Too many login attempts, please try again after 1 minute',
    })
)

// connect to database
mongoLoader()

// load routes
app.use('/api', routes);

export default app;