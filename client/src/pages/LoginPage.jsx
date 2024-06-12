import { useForm } from "react-hook-form";
import { useAuth } from "../context/Auth.Contex";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import swal from "sweetalert";
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signin, errors: signinErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    try {
      signin(data);
      swal("Completado!", "Inicio de sesion excitoso!", "success");
    } catch (error) {
      swal("Error!", "Something went wrong. Please try again.", "error");
    }
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  }, [isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center">
      <div className="bg-zinc-800  max-w-md w-full p-10 rounded-md">
        {Array.isArray(signinErrors) &&
          signinErrors.map((error, i) => (
            <div className="bg-red-500 p-2 text-white text-center my-2" key={i}>
              {error}
            </div>
          ))}

        <h1 className=" text-2xl font-serif">Login</h1>

        <form onSubmit={onSubmit}>
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
            className="bg-indigo-500 hover:bg-blue-700 text-white font-serif py-2 px-4 rounded "
            type="submit"
          >
            Continuar
          </button>
        </form>
        
        <p className=" flex gap-x-2 justify-between">
          Dont have an account?{" "}
          <Link to="/register" className=" text-sky-500 font-serif">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
