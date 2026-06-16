const { smtpConfig } = require("../config/smtp");

const getHealthStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Backend is running",
    environment: process.env.NODE_ENV || "development",
    emailService: smtpConfig ? "configured" : "not_configured",
  });
};

module.exports = {
  getHealthStatus,
};
