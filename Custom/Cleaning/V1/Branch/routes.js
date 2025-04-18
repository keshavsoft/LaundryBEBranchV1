import express from 'express';

var router = express.Router();

import { router as Today } from './Today/routes.js';
import { router as All } from './All/routes.js';
import { router as Reports } from './Reports/routes.js';
import { router as Order } from './Order/routes.js';

router.use('/Today', Today);
router.use('/All', All);
router.use('/Reports', Reports);
router.use('/Order', Order);

export { router };