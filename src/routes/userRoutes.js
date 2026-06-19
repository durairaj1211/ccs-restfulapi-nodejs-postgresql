import express from "express";
//import cors from "cors";
import dotenv from "dotenv";
//import pool from "./config/db.js";

import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router();

dotenv.config();

router.post("/user", validateUser, createUser);
router.get("/user", getAllUsers);
router.get("/user/:id", getUserById);
router.put("/user/:id", validateUser, updateUser);
router.delete("/user/:id", deleteUser);

export default router;
