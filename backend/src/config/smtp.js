const nodemailer = require("nodemailer");

const getSmtpConfig = () => {
  const host = process.env.SMTP_HOST;
  const port = process.env.SMTP_PORT;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  const from = process.env.SMTP_FROM;

  if (!host || !port || !user || !pass || !from) {
    console.warn("SMTP is not configured. OTP email sending is disabled.");
    return null;
  }

  return {
    host,
    port: Number(port),
    auth: {
      user,
      pass,
    },
    from,
  };
};

const smtpConfig = getSmtpConfig();

const transporter = smtpConfig
  ? nodemailer.createTransport({
      host: smtpConfig.host,
      port: smtpConfig.port,
      secure: Number(smtpConfig.port) === 465,
      auth: smtpConfig.auth,
    })
  : null;

const verifySmtpConnection = async () => {
  if (!transporter) {
    return false;
  }

  try {
    await transporter.verify();
    console.log("SMTP connection verified");
    return true;
  } catch (error) {
    console.warn(`SMTP verification skipped: ${error.message}`);
    return false;
  }
};

module.exports = {
  smtpConfig,
  transporter,
  verifySmtpConnection,
};
