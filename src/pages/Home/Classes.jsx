import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Classes = () => {
  const { user, logout } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(`http://localhost:5000/get-approve-classes`);
    return res.json();
  });
  console.log(classes);

  const handleSelectClass = (classItem) => {
    if (!user) {
      toast.error("please login first then select Class");
      return;
    }

    const classItemId = classItem._id;
    delete classItem._id;
    delete classItem.feedback;

    const selectedClassItem = {
      ...classItem,
      classItemId,
      selectedBy: user?.email,
      paymentStatus: "",
      paymentDate: "",
    };
    console.log(selectedClassItem);

    fetch("http://localhost:5000/selected-classitem", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(selectedClassItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success(`Class added in dashboard`);
        }
        toast.error(`item already added in dashboard`);
      })
      .catch((err) => toast.error(err.message));
  };
  return (
    <div>
      <h3 className="text-center text-2xl font-bold">All Classes</h3>
      <div className="grid grid-cols-3 gap-5">
        {classes.map((classItem) => (
          <div key={classItem._id}>
            <div
              className={`card card-compact ${
                parseInt(classItem.availableSeats) === 0
                  ? "bg-red-300"
                  : "bg-base-100"
              } shadow-xl`}
            >
              <figure>
                <img src={classItem.imgURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{classItem.className}</h2>
                <div>
                  <p>
                    <span className="font-semibold">Instructor name : </span>
                    {classItem.instructorName}
                  </p>
                  <p>
                    <span className="font-semibold">Available seats : </span>
                    {classItem.availableSeats}
                  </p>
                  <p>
                    <span className="font-semibold">Price : </span>
                    {classItem.price}
                  </p>
                </div>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleSelectClass(classItem)}
                    disabled={parseInt(classItem.availableSeats) === 0}
                    // TODO: Logged in as admin/instructor DISABLE
                    className="btn bg-slate-900 text-white "
                  >
                    Select Class
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
