import { Router } from "express";
import { methods as taskController } from "../controllers/task.controller.js";
const router = Router();

router.get("/tasks", taskController.getTasks); //Mostrar Tareas.
router.get("/taskAll", taskController.getTaskAll); // Mostrar Tareas con todos los datos.
router.get("/searchTask/:codeUser", taskController.getTaskUser); //Buscar las tareas de un usuario.

router.delete("/task/:id", taskController.deleteTask); // Borrar una tarea mediante el id.
router.put("/task/:id", taskController.updateTask); //Actualizar mediente el id

router.post("/task", taskController.addTask); // Agregar una tarea

export default router;