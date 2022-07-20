import { Router } from "express";
import { methods as taskController } from "../controllers/task.controller.js";
const router = Router();

router.get("/", taskController.getTasks); //Mostrar Tareas.
router.get("/taskAll", taskController.getTaskAll); // Mostrar Tareas con todos los datos.
router.get("/search/:codeUser", taskController.getTaskUser); //Buscar las tareas de un usuario.

router.delete("/delete/:id", taskController.deleteTask); // Borrar una tarea mediante el id.
router.put("/update/:id", taskController.updateTask); //Actualizar mediente el id

router.post("/add", taskController.addTask); // Agregar una tarea

export default router;