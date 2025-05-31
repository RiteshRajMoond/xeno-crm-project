import CommunicationLogs from "../models/communicationLog.model.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";

class DeliveryController {
  recieveReciept = async (req, res, next) => {
    const { logId, deliveryStatus } = req.body;

    const log = await CommunicationLogs.findById(logId);
    if (!log) {
      return res
        .status(404)
        .json(new ApiResponse(404, null, "Communication log not found"));
    }

    log.deliveryStatus = deliveryStatus;
    log.deliveryReceiptTime = new Date();
    await log.save();

    res
      .status(200)
      .json(new ApiResponse(200, log, "Delivery status updated successfuly"));
  };
}

export const deliveryController = new DeliveryController();
