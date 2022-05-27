import express from "express";
import proprietarioController from "../controllers/proprietario.controller.js";

const router = express.Router();

router.post("/", proprietarioController.create);
router.put("/", proprietarioController.update);
router.delete("/:id", proprietarioController.exclude);
router.get("/", proprietarioController.print);
router.get("/:id", proprietarioController.print);

export default router;