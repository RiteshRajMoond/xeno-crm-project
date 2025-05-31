import express from "express";

import { deliveryController } from "../controller/delivery.controller.js";

const router = express.Router();

router.post("/reciept", deliveryController.recieveReciept);

export default router;
