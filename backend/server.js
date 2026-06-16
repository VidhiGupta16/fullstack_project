require("dotenv").config();

const app = require("./src/app");
const connectDB = require("./src/config/db");
const { connectCloudinary } = require("./src/config/cloudinary");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const mongoConnected = await connectDB();
    connectCloudinary();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
      if (!mongoConnected) {
        console.warn("Server started without a MongoDB connection");
      }
    });
  } catch (error) {
    console.error("Failed to start server:", error.message);
    process.exit(1);
  }
};

startServer();
