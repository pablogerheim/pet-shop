import express from "express";
import animalController from "../controllers/animal.controller.js";

const router = express.Router();

router.post("/", animalController.create);
router.put("/", animalController.update);
router.delete("/:id", animalController.exclude);
router.get("/", animalController.print);
router.get("/:id", animalController.print);

export default router;