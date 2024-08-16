import express from 'express';
import cors from '@/middlewares/cors';
import helmet from '@/middlewares/helmet';
import routes from '@/api/routes';

const app = express();

// Middlewares
app.use(express.json());
app.use(cors);
app.use(helmet);
app.use('/api', routes);

export default app;
