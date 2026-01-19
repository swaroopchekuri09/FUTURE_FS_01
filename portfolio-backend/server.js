require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// ROUTES
const contactRoutes = require("./routes/contactRoutes");
const projectRoutes = require("./routes/projectRoutes");

const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5002;

// STATUS VARIABLE (for website)
let dbStatus = "❌ MongoDB not connected";

// =========================
// START SERVER FUNCTION
// =========================
async function startServer() {
  try {
    console.log("⏳ Connecting to MongoDB...");

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    dbStatus = "✅ MongoDB connected";
    console.log("✅ MongoDB connected");

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("❌ MongoDB connection failed:");
    console.error(error.message);
    process.exit(1);
  }
}

// START SERVER
startServer();

// =========================
// ROUTES
// =========================
app.use("/api/contact", contactRoutes);
app.use("/api/projects", projectRoutes);

// =========================
// STATUS API (for website)
// =========================
app.get("/api/status", (req, res) => {
  res.json({
    server: "✅ Backend running",
    database: dbStatus,
  });
});
