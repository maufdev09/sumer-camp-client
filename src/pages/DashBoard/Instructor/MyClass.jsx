// import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const MyClass = () => {
  const { user, logout } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(
      `https://sports-academy-server-zeta.vercel.app/get-instructor-classes/${user.email}`
    );
    return res.json();
  });

  return (
    <div className="w-full">
      {" "}
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className="flex flex-col  gap-5 md:flex-row items-start md:items-center bg-white p-4 border rounded shadow mb-4"
        >
          <img
            src={classItem.imgURL}
            className="w-32 h-32 object-cover rounded-lg md:mr-4"
            alt=""
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg mb-2">{classItem.className}</p>
            <p>Instructor Name : {classItem.instructorName}</p>
            <p>Enrolled Student : {classItem.totalEnrolledStudent}</p>

            <p>
              Status :{" "}
              <span
                className={
                  classItem.status === "approve"
                    ? "text-green-600 font-bold"
                    : "text-red-500 font-bold"
                }
              >
                {classItem.status}
              </span>{" "}
            </p>
            {classItem.feedback && classItem.status === "deny" && (
              <div
                tabIndex={0}
                className="collapse collapse-plus border border-base-300 bg-base-200"
              >
                <div className="collapse-title text-xl font-medium">
                  see feedback
                </div>
                <div className="collapse-content">
                  <p>{classItem.feedback}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyClass;
