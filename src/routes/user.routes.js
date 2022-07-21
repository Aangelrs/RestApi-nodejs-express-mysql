import { Router } from "express";
import { methods as userController } from "./../controllers/user.controller.js" ;

const router = Router();

//Aqui uso view en la DB.

router.get("/", userController.getUsers);
router.get("/showUserTask", userController.showUserTask);
router.get("/searchTask/:codeUser", userController.searchTask); 

router.post("/add", userController.addUser);


export default router;
