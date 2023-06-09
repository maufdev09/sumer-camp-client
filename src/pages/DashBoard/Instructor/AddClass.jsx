import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const AddClass = () => {
  const { user } = useContext(AuthContext);

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

  const img_upload_URL = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const {
      availableSeats,
      className,
      image,
      instructorEmail,
      instructorName,
      price,
    } = data;
    console.log(data);
    const formData = new FormData();
    formData.append("image", image[0]);

    fetch(img_upload_URL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const classItem = {
            className,
            imgURL,
            instructorName,
            instructorEmail,
            price: parseFloat(price),
            availableSeats,
            status: "pending",
            feedback: "",
            totalEnrolledStudent: 0,
          };
          fetch("http://localhost:5000/add-class", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(classItem),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                toast.success(`your class is uploaded & waiting for approve`);
                reset();
              }
            })
            .catch((err) => {
              console.log(err);
              toast.error(`err.message`);
            });
        }
      });
  };

  return (
    <div className="w-10/12 my-5 ">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-5xl font-bold text-center pt-5 ">Add a Class!</h1>
        <div className="grid gap-4">
          <div className="form-control col-span-4">
            <label className="label">
              <span className="label-text">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="className"
              className="input input-bordered"
              {...register("className", {
                required: "Required",
              })}
            />
            {errors?.className && errors?.className.message}
          </div>

          {/* upload image */}

          <div className="form-control col-span-4">
            <label className="label-text py-2 ">Upload Image</label>
            <input
              type="file"
              accept="image/*"
              className="file-input w-full max-w-xs"
              {...register("image", {
                required: "Required",
              })}
            />
            {errors?.image && errors?.image.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Instructor Name</span>
            </label>
            <input
              type="text"
              value={user?.displayName}
              className="input input-bordered"
              {...register("instructorName", {
                required: "Required",
              })}
            />
            {errors?.instructorName && errors?.instructorName.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Instructor Email</span>
            </label>
            <input
              type="email"
              value={user?.email}
              className="input input-bordered"
              {...register("instructorEmail", {
                required: "Required",
              })}
            />
            {errors?.instructorEmail && errors?.instructorEmail.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Available Seats </span>
            </label>
            <input
              type="number"
              placeholder="AvailableSeats"
              className="input input-bordered"
              {...register("availableSeats", {
                required: "Required",
              })}
            />
            {errors?.availableSeats && errors?.availableSeats.message}
          </div>

          <div className="form-control col-span-2">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered"
              {...register("price", {
                required: "Required",
              })}
            />
            {errors?.price && errors?.price.message}
          </div>

          <div className="form-control col-span-4 mt-6">
            <button type="submit" className="btn  bg-red-200">
              Add Class{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
