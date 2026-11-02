import { RESPONSE_CODES } from "../../../config/constants";
import Logger from "./logger";
import { CommonMessages } from "../../../constants/message/common";

const authMiddleWare = async (req, res, next) => {
  try {
    const logger = new Logger();
    await logger.init();

    const ignorePaths = [
      "/",
      "/health",
      "/api-docs",
      "/v1/",
      "/v1/logout",
      "/v1/student/add",
    ];

    const { method, headers, originalUrl } = req;
    const pathname = originalUrl.split("?")[0];

    const ip =
      req.headers["x-forwarded-for"] || req.connection.remoteAddress;

    const logObj = {
      ip,
      headers: req.headers,
      method: req.method,
      url: req.originalUrl,
      timestamp: Date.now(),
    };

    if (
      (method === "POST" && originalUrl === "/user") ||
      (method === "GET" && originalUrl.includes("/api-docs/")) ||
      (method === "GET" && originalUrl.includes("/v1/pause-subscription"))
    ) {
      logger.logInfo("Activity Log: ", logObj);
      return next();
    }

    if (ignorePaths.includes(pathname)) {
      logger.logInfo("Activity Log: ", logObj);
      return next();
    }

    if (!headers.authorization) {
      logger.logInfo("Activity Log: ", logObj);
      return res.json({
        status: 0,
        code: RESPONSE_CODES.UNAUTHORIZED,
        message: CommonMessages.UNAUTHORIZED_USER,
        data: null,
      });
    }

    return next();
  } catch (error) {
    console.error("Authentication middleware error:", error);

    return res.status(RESPONSE_CODES.UNAUTHORIZED).json({
      status: 0,
      code: RESPONSE_CODES.UNAUTHORIZED,
      message: CommonMessages.UNAUTHORIZED_USER,
      data: null,
    });
  }
};

export default authMiddleWare;