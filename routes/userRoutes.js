import express from "express";
import { register, getUsers, deleteUser } from '../controllers/userController.js'
const router = express.Router();

router.get('/', getUsers);
router.post('/', register);
router.delete('/', deleteUser);

export default router;