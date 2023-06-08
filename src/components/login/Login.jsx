import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const Login = () => {
  const { signIn, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    const { email, password } = data;
    signIn(email, password)
      .then((res) => {
        const loggedUser = res?.user;
        console.log(loggedUser);
        toast.success("Login successfully");
        navigate(from, { replace: true });
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };

  const handleGooglelogin = () => {
    signInGoogle()
      .then((res) => {
        const loggedUser = res?.user;
        console.log(loggedUser);
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          role: "student",
        };

        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(savedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              toast.success(`Hello! ${loggedUser.email}! WelCome`);
            }
          });
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.error(err);
        toast.error(err.message);
      });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card flex-shrink-0 w-full mx-auto my-6 max-w-sm shadow-2xl bg-base-100 ">
        <h1 className="text-5xl font-bold text-center pt-5">Login now!</h1>

        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
              {...register("email", {
                required: "Required",
              })}
            />
            {errors?.email && errors?.email.message}
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="text"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: "Required",
              })}
            />
            {errors?.password && errors?.password.message}

            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <p className="pb-5">
            Dont Have an Account?
            <Link className="link text-red-300" to="/register">
              Register
            </Link>
          </p>
          <div className="form-control mt-6">
            <button type="submit" className="btn  bg-red-200">
              Login
            </button>
          </div>
          <div className="divider">Or</div>
          <button className="btn bg-red-200" onClick={handleGooglelogin}>
            {" "}
            <FaGoogle></FaGoogle> Sign with Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;

{
  /* <input
  type="email"
  {...register("email", {
    required: "Required",
  })}
/>
{errors.email && errors.email.message} */
}
