import mongoose from "mongoose";

const communicationLogSchema = new mongoose.Schema(
  {
    campaign: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Campaign",
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customer",
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    deliveryStatus: {
      type: String,
      enum: ["PENDING", "SENT", "FAILED"],
      default: "PENDING",
    },
    message: {
      type: String,
      required: true
    },
    deliveryReceiptTime: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
);

const CommunicationLogs = mongoose.model(
  "CommunicationLog",
  communicationLogSchema
);
export default CommunicationLogs;
