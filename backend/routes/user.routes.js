import express from "express";
import {
  addUser,
  getUser,
  loginUser,
  removeUser,
} from "../controllers/user.controller.js";
const router = express.Router();

router.post("/add-user", addUser);
router.get("/get-user", getUser);
router.delete("/remove-user/:id", removeUser);
router.post("/login-user", loginUser);

export default router;
