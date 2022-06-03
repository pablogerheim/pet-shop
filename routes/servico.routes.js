import express from "express";
import servicoController from "../controllers/servico.controller.js";

const router = express.Router();

router.post("/", servicoController.create);
router.get("/", servicoController.print);
router.get("/:id", servicoController.print);

export default router;