import express from "express";
import { homeInitial } from "../controllers/userController.js";
const router = express.Router();

router.get("/", homeInitial);

export default router;
