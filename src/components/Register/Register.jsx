import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";

const Register = () => {
  const { createUser, user, signInGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
    watch,
  } = useForm();

  const onSubmit = (data) => {
    const { email, imgurl, name, password } = data;
    createUser(email, password, name, imgurl).then(() => {
      const savedUser = {
        name: name,
        email: email,
        role: "student",
        imgurl: imgurl,
      };
      fetch("https://sports-academy-server-zeta.vercel.app/users", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            toast.success(`Hello! ${email}! WelCome`);
            navigate("/");
          } else {
            toast.error("Already User");
          }
        });
    });
  };
  const password = watch("password");

  const handleGooglelogin = () => {
    signInGoogle()
      .then((res) => {
        const loggedUser = res?.user;
        const savedUser = {
          name: loggedUser.displayName,
          email: loggedUser.email,
          role: "student",
          imgurl: loggedUser?.photoURL,
        };

        fetch("https://sports-academy-server-zeta.vercel.app/users", {
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
              navigate("/");
            }
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="card flex-shrink-0 w-full mx-auto my-6 max-w-sm shadow-2xl bg-base-100 ">
        <h1 className="text-5xl font-bold text-center pt-5">Register</h1>

        <div className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              placeholder="name"
              className="input input-bordered"
              {...register("name", {
                required: "Required",
              })}
            />
            {errors?.name && errors?.name.message}
          </div>
          {/* email  */}
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
              <span className="label-text">Image URL</span>
            </label>
            <input
              type="url"
              placeholder="ImgURL"
              className="input input-bordered"
              {...register("imgurl", {
                required: "Required",
              })}
            />
            {errors?.imgurl && errors?.imgurl.message}
          </div>

          {/* upload image */}
          {/* <div className="form-control">
            <label className="label-text pb-2 ">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full max-w-xs"
              {...register("image", {
                required: "Required",
              })}
            />
            {errors?.image && errors?.image.message}
          </div> */}

          {/* password  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              {...register("password", {
                required: "Required",
                minLength: {
                  value: 6,
                  message: "password must be at least 6 charecters",
                },
                pattern: {
                  value:
                    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  message:
                    "password must contains at least one uppercase letter,one digit,and one special charecter",
                },
              })}
            />
            {errors?.password && errors?.password.message}
          </div>
          {/* confirm password */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="input input-bordered"
              {...register("congfirmpassword", {
                required: "Required",
                validate: (value) =>
                  value === password || "password do not match",
              })}
            />
            {errors?.congfirmpassword && errors?.congfirmpassword.message}
          </div>
          <p className="pb-5">
            Already have an Account?{" "}
            <Link className="link text-blue-500" to="/login">
              Login
            </Link>
          </p>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn  text-white hover:bg-slate-700 bg-black"
            >
              Register
            </button>
          </div>
          <div className="divider">Or</div>
          <button
            className="btn text-white hover:bg-slate-700 bg-black"
            onClick={handleGooglelogin}
          >
            {" "}
            <FaGoogle></FaGoogle> Sign with Google
          </button>
        </div>
      </div>
    </form>
  );
};

export default Register;
