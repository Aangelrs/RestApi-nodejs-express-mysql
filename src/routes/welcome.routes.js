import { Router } from "express";
import { methods as welcomeController} from "../controllers/welcome.controller.js";

const router = Router();

router.get("/", welcomeController.getWelcome);

export default router;
