import { useTasks } from "../context/TasksContex";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import swal from 'sweetalert';

dayjs.extend(utc);

function TaskCard({ task }) {
  const { deleteTask } = useTasks();

  const handleDelete = (id) => {
    swal({
      title: "Estas Seguro?",
      text: "Una vez elimines la tarea no la podras recuperar!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteTask(id)
          .then(() => {
            swal("Completado!", "tarea eliminada!", "success");
          })
          .catch((error) => {
            console.error("Error deleting task:", error);
            swal("Error!", "Something went wrong. Please try again.", "error");
          });
      }
    });
  };

  return (
    <div className=" bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className=" flex justify-between">
        <h1 className=" text-2xl font-bold">{task.title}</h1>
        <div className=" flex gap-x-2 items-center">
          <button
            className=" bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-serif"
            onClick={() => handleDelete(task._id)}
          >
            delete
          </button>
          <Link
            to={`/tasks/${task._id}`}
            className="bg-indigo-500 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded"
          >
            edit
          </Link>
        </div>
      </header>

      <p className=" text-slate-300">{task.description}</p>
      <p>{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;
