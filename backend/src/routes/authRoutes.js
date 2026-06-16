const express = require("express");
const { getProfile, login, register } = require("../controllers/authController");

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/profile", getProfile);

module.exports = router;
