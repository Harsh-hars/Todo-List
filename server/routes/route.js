import express from "express";
export const router = express.Router();
import { deleteTodo, getTodo, saveTodo, updateTodo } from "../controller/control.js";

router.get("/get",getTodo);
router.post("/save",saveTodo);
router.put("/update/:id",updateTodo);
router.delete("/delete/:id",deleteTodo);

router.get("/get/:id");