import CommunicationLogs from "../models/communicationLog.model.js";
import vendorApi from "../utils/simulatorVendor.util.js";

class MessageSenderService {
  async sendCampaignMessages({ campaign, audience, userId }) {
    const sendPromises = audience.map(async (customer) => {
      const message = `${customer.name}, here's a 10% discount on your next order!`;

      const log = await CommunicationLogs.create({
        campaign: campaign._id,
        customer: customer._id,
        user: userId,
        message,
      });

      await vendorApi(log._id);
    });

    await Promise.all(sendPromises);
  }
}

export default new MessageSenderService();
