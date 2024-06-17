const express = require("express");
const { authMiddleware, isAdmin } = require("../../middlewares/authMiddleware");
const { 
    getAllUsers, 
    getAllAdmins, 
    getaSingleUser, 
    updateUser, 
    deactivateUser
} = require("./contollers");

const userRouter = express.Router();
const route = '/users';

userRouter.get("/", authMiddleware, isAdmin, getAllUsers);
userRouter.get("/admins", authMiddleware, isAdmin, getAllAdmins);
userRouter.get("/:id", authMiddleware, getaSingleUser);
userRouter.patch("/:id", authMiddleware, updateUser);
userRouter.delete("/:id", authMiddleware, isAdmin, deactivateUser);

module.exports = {
    userRouter,
    route,
};