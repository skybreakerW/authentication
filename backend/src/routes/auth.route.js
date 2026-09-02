import express from "express";
import { login, logout, signup, verifyEmail, forgotPassword, resetPassword, checkAuth } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/verifyToken.js";


const router = express.Router()

router.get("/check", verifyToken, checkAuth)
router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)

router.post("/verify", verifyEmail)
router.post("/forgot", forgotPassword)
router.post("/reset/:token", resetPassword)


export default router

