const mongoose = require("mongoose");
const dns = require("dns");

const connectDB = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MongoDB URI is not set");
  }

  const connectWithUri = async (mongoUri) => {
    const connection = await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB connected: ${connection.connection.host}`);
    return true;
  };

  try {
    return await connectWithUri(uri);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);

    const shouldRetryWithPublicDns =
      uri.startsWith("mongodb+srv://") &&
      /querySrv|ENOTFOUND|EAI_AGAIN|ECONNREFUSED/i.test(error.message);

    if (!shouldRetryWithPublicDns) {
      throw error;
    }

    try {
      dns.setServers(["1.1.1.1", "8.8.8.8"]);
      console.warn("Retrying MongoDB connection with public DNS servers...");
      return await connectWithUri(uri);
    } catch (retryError) {
      console.error("MongoDB retry failed:", retryError.message);
      throw retryError;
    }
  }
};

module.exports = connectDB;
