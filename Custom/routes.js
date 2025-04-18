import express from 'express';

var router = express.Router();

import { router as Cleaning } from './Cleaning/routes.js';

router.use('/Cleaning', Cleaning);

export { router };