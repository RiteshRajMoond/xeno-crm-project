import axios from "axios";

import { env } from "../config/index.js";

const vendorApi = async (logId) => {
  await new Promise((resolve) =>
    setTimeout(resolve, Math.random() * 1500 + 500)
  );

  const deliveryStatus = Math.random() < 0.9 ? "SENT" : "FAILED";

  await axios.post(`${env.BACKEND_URL}/api/v1/delivery/reciept`, {
    logId,
    deliveryStatus,
  });
};

export default vendorApi;
