import express from 'express';

var router = express.Router();

import { router as routerFrombin } from './LoginBin/routes.js';

router.use('/bin', routerFrombin);

export { router };