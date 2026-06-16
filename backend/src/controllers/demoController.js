const mongoose = require("mongoose");

const getConnectionTest = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Frontend and backend are connected",
    backendTime: new Date().toISOString(),
  });
};

const getServiceStatus = (req, res) => {
  res.status(200).json({
    success: true,
    message: "Service status checked",
    mongoDbStatus: mongoose.connection.readyState === 1 ? "connected" : "not connected",
    cloudinaryStatus: "configured",
  });
};

module.exports = {
  getConnectionTest,
  getServiceStatus,
};
