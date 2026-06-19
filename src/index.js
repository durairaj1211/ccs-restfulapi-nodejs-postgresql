import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import errorHandling from "./middlewares/errorhandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api", userRoutes);

//error handling middleware
app.use(errorHandling);

//create user table if not exists
import createUserTable from "./data/createUserTable.js";
createUserTable();

//test database connection
app.get("/", async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT NOW()");
    client.release();
    res.status(200).json({ message: "Database connection successful", time: result.rows[0].now });
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ message: "Database connection failed", error: err.message });
  }
});



//server running
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



