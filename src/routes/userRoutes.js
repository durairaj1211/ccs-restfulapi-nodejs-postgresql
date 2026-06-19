import express from "express";
//import cors from "cors";
import dotenv from "dotenv";
//import pool from "./config/db.js";

import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";

const router = express.Router();

dotenv.config();

router.post("/user", createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;
