import { Router } from 'express';
import { paginate } from '../controllers/postController.js';

const router = Router();

router.get('/', paginate);

export default router;