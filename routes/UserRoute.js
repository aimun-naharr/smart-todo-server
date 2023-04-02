import express from "express";


const router = express.Router();

router.post("/createNewUser", signUpUser);
router.post("/loginUser", loginUser);


export default router;