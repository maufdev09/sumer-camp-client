import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {
  const { user, logout } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(
      `https://sports-academy-server-zeta.vercel.app/get-payed-classes/${user.email}`
    );
    return res.json();
  });
  console.log(classes);

  return (
    <div className="w-4/5 my-10 ">
      <h3 className="font-bold text-center mb-24 text-4xl">Enrolled Class</h3>
      <h3 className="font-bold w-1/4 ms-10 text-center my-20 bg-slate-900 rounded text-white  text-2xl ">
        Total Classes : {classes.length}
      </h3>
      <div className=" grid md:grid-cols-2 gap-12 mx-10">
        {classes.map((classesitem) => (
          <div
            key={classesitem._id}
            className=" bg-slate-900 text-white p-5 rounded-xl"
          >
            <div className=" space-y-5 ">
              <img className="w-60 mx-auto" src={classesitem.image} alt="" />
              <div className="text-center">
                <h3 className="font-bold text-2xl  ms-3 ">
                  {classesitem.className}
                </h3>
                <p className="font-bold   ms-3">{classesitem.instructorName}</p>
              </div>
            </div>
            <div className=" text-center">
              <button className=" btn bg-black text-white ">
                Continue Course
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledClass;
