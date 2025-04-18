import express from 'express';

var router = express.Router();

import { router as Branch } from './Branch/routes.js';
import { router as V1 } from "./V1/routes.js";

router.use('/Branch', Branch);
router.use('/V1', V1);

export { router };