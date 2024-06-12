import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContex";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import swal from "sweetalert";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();

  const { createTask, getTask, updateTask } = useTasks();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
        setValue("date", dayjs(task.date).utc().format("YYYY-MM-DD"));
      }
    }
    loadTask();
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };
    try {
      if (params.id) {
        updateTask(params.id, dataValid);
        swal("Actualizada!", "Tarea actualizada excitosamente!", "success");
      } else {
        createTask(dataValid);
        swal("Creada!", "Tarea creada excitosamente!", "success");
      }
      navigate("/tasks");
    } catch (error) {
      console.error("Error creating/updating task:", error);
      swal("Error!", "Something went wrong. Please try again.", "error");
    }
  });


  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
        <h1 className=" text-2xl font-bold">Create a Task</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="title">title</label>
          <input
            type="text"
            placeholder="Title"
            {...register("title")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            autoFocus
          />
          <label htmlFor="description">description</label>
          <textarea
            rows="3"
            placeholder="Description"
            {...register("description")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          ></textarea>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            {...register("date")}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          />
          <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
            Save
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskFormPage;
