const express = require("express");
const { getConnectionTest, getServiceStatus } = require("../controllers/demoController");

const router = express.Router();

router.get("/test", getConnectionTest);
router.get("/status", getServiceStatus);

module.exports = router;
