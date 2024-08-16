import { Router } from 'express';

// Controllers and Routes
import welcome from '@/api/welcome';

// Routes
const router = Router();
router.get('/', welcome);

export default router;
