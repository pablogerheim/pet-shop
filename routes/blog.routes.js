import express from "express";
import blogController from "../controllers/blog.controller.js";


const router = express.Router();

router.post("/", blogController.create);
router.get("/", blogController.print);
router.put("/comentario", blogController.update);

export default router;