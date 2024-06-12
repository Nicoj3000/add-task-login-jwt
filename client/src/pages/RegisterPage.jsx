import swal from 'sweetalert';
import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.Contex";
import { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function RegisterPages() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signup, isAuthenticated, errors: registerErrors } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  const onSubmit = handleSubmit(async (values) => {
    try {
      await signup(values);
      swal("Completado!", "Haz realizado tu registro!", "success");
    } catch (error) {
      swal("Hubo un error!", "Algo fallo, intentar otra vez.", "error");
    }
  });

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
        {registerErrors.map((error, i) => (
          <div className="bg-red-500 p-2 text-white text-center" key={i}>
            {error}
          </div>
        ))}
        <h1 className=" text-2xl font-serif">Register</h1>

        <form onSubmit={onSubmit}>
          <input
            type="text"
            {...register("username", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Username"
          />
          {errors.username && (
            <p className="text-red-500">Username is required</p>
          )}

          <input
            type="email"
            {...register("email", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Email"
          />
          {errors.email && <p className="text-red-500">Email is required</p>}
          <input
            type="password"
            {...register("password", { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="password"
          />
          {errors.password && (
            <p className="text-red-500">Password is required</p>
          )}
          <button
            className="bg-indigo-500 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded"
            type="submit"
          >

            Register
          </button>
        </form>
        <p className=" flex gap-x-2 justify-between">
          Already have an account?{" "}
          <Link to="/login" className=" text-sky-500 font-serif">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default RegisterPages;
