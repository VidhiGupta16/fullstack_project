const express = require("express");
const cors = require("cors");
require("dotenv").config();

const healthRoutes = require("./routes/healthRoutes");
const authRoutes = require("./routes/authRoutes");
const demoRoutes = require("./routes/demoRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app = express();
const frontendOrigin = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(
  cors({
    origin: frontendOrigin,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Backend is running",
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/demo", demoRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
