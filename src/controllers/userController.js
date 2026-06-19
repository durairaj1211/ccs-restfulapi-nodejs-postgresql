//standard CRUD operations for user management
import pool from "../config/db.js";
import { createUserService, getAllUsersService, getUserByIdService, updateUserService, deleteUserService } from "../models/userModel.js";

const handleResponse = (res, status, message, data = null) => {
    res.status(status).json({status: status, message: message, data: data});
}

export const createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const newUser= await createUserService(name, email);
        handleResponse(res, 201, "User created successfully", newUser);
    } catch (err) {
        console.error("Error creating user:", err);
        handleResponse(res, 500, "Failed to create user", { error: err.message });
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const users = await getAllUsersService();
        handleResponse(res, 200, "Users retrieved successfully", users);
    } catch (err) {
        console.error("Error retrieving users:", err);
        handleResponse(res, 500, "Failed to retrieve users", { error: err.message });
    }
}

export const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await getUserByIdService(id);
        if (!user) {
            return handleResponse(res, 404, "User not found");
        }
        handleResponse(res, 200, "User retrieved successfully", user);
    } catch (err) {
        console.error("Error retrieving user:", err);
        handleResponse(res, 500, "Failed to retrieve user", { error: err.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const updatedUser = await updateUserService(id, name, email);
        handleResponse(res, 200, "User updated successfully", updatedUser);
    } catch (err) {
        console.error("Error updating user:", err);
        handleResponse(res, 500, "Failed to update user", { error: err.message });
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await deleteUserService(id);
        handleResponse(res, 200, "User deleted successfully");
    } catch (err) {
        console.error("Error deleting user:", err);
        handleResponse(res, 500, "Failed to delete user", { error: err.message });
    }
}