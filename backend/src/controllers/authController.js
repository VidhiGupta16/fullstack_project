const sendEmail = require("../utils/sendEmail");

const createOtp = () => Math.floor(100000 + Math.random() * 900000).toString();

const sendOtpOrFail = async (email, purpose) => {
  const otp = createOtp();

  await sendEmail({
    to: email,
    subject: `Your ${purpose} OTP`,
    text: `Your OTP is ${otp}. It expires in 10 minutes.`,
    html: `<p>Your OTP is <strong>${otp}</strong>.</p><p>It expires in 10 minutes.</p>`,
  });

  return otp;
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "Email and password are required",
    });
  }

  try {
    await sendOtpOrFail(email, "login");

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    if (error.code === "EMAIL_SERVICE_NOT_CONFIGURED") {
      return res.status(503).json({
        success: false,
        message: "Email service is not configured. OTP cannot be sent.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again later.",
    });
  }
};

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and password are required",
    });
  }

  try {
    await sendOtpOrFail(email, "registration");

    return res.status(201).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    if (error.code === "EMAIL_SERVICE_NOT_CONFIGURED") {
      return res.status(503).json({
        success: false,
        message: "Email service is not configured. OTP cannot be sent.",
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again later.",
    });
  }
};

const getProfile = (req, res) => {
  const authHeader = req.headers.authorization || "";
  const token = authHeader.startsWith("Bearer ") ? authHeader.slice(7) : "";

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized",
    });
  }

  return res.status(200).json({
    success: true,
    user: {
      name: "Demo User",
      email: "demo@example.com",
    },
  });
};

module.exports = {
  getProfile,
  login,
  register,
};
