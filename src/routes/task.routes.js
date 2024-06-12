import { Router } from "express";
import { authRequire } from "../middlewares/validateToken.js";
// Definimos las rutas de las tareas
import {
  getTask,
  getTasks,
  deleteTask,
  createTask,
  updateTasks,
} from "../controllers/tasks.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createTaskSchema } from "../schemas/task.schema.js";
const router = Router();

router.get("/tasks", authRequire, getTasks);

router.get("/tasks/:id", authRequire, getTask);

router.post(
  "/tasks",
  authRequire,
  validateSchema(createTaskSchema),
  createTask
);

router.delete("/tasks/:id", authRequire, deleteTask);

router.put("/tasks/:id", authRequire, updateTasks);

export default router;
