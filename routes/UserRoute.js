import express from "express";
import { loginUser, signUpUser } from "../controllers/AuthController.js";


const router = express.Router();

router.post("/createNewUser", signUpUser);
router.post("/loginUser", loginUser);


export default router;