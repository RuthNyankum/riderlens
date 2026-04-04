import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./lib/db.js";

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      process.env.WEB_URL || "http://localhost:3001",
      process.env.ADMIN_URL || "http://localhost:3000",
    ],
    credentials: true,
  }),
);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check — hit this in browser to confirm server is running
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "RiderLens API is running" });
});

// Connect DB and start server
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

export default app;
