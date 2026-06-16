const { transporter, smtpConfig } = require("../config/smtp");

const sendEmail = async ({ to, subject, text, html }) => {
  if (!transporter) {
    const error = new Error("Email service is not configured");
    error.code = "EMAIL_SERVICE_NOT_CONFIGURED";
    throw error;
  }

  try {
    return await transporter.sendMail({
      from: smtpConfig.from,
      to,
      subject,
      text,
      html,
    });
  } catch (error) {
    const wrappedError = new Error("Failed to send email");
    wrappedError.code = "EMAIL_SEND_FAILED";
    wrappedError.cause = error;
    throw wrappedError;
  }
};

module.exports = sendEmail;
