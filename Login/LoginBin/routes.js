import express from 'express';

var router = express.Router();

import { router as routerFromCreateToken } from './CreateToken/routes.js';
import { router as routerFromUsers } from "./Users/routes.js";
import { router as routerFromValidateToken } from "./ValidateToken/routes.js";
import { router as Branch } from "./Branch/routes.js";

router.use('/CreateToken', routerFromCreateToken);
router.use('/Users', routerFromUsers);
router.use('/ValidateToken', routerFromValidateToken);
router.use('/Branch', Branch);

export { router };