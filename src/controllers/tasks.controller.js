import Task from "../models/task.model.js";

//Creamos funcion para listar tareas de un usuario
export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user.id,
    }).populate("user");
    res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: "Something went worng" });
  }
};
// crear una tarea de un usuario
export const createTask = async (req, res) => {
  try {
    const { title, description, date } = req.body;
    const newTask = new Task({
      title,
      description,
      date,
      user: req.user.id,
    });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (error) {
    return res.status(500).json({ message: "Something went worng" });
  }
};
// listar una tarea de un usuario
export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).populate("user");
    if (!task) return res.status(404).json({ message: "task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "task not found" });
  }
};
// actualizar las tareas de un usuario o editar
export const updateTasks = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!task) return res.status(404).json({ message: "task not found" });
    res.json(task);
  } catch (error) {
    return res.status(404).json({ message: "task not found" });
  }
};
// eliminar una tarea de un usuario
export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ message: "task not found" });
    return res.sendStatus(204);
  } catch (error) {
    return res.status(404).json({ message: "task not found" });
  }
};
