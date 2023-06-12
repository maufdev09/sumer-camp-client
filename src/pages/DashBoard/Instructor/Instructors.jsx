import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

const Instructors = () => {
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axios.get(
        `https://sports-pro-academy-production.up.railway.app/get-instructors`
      );
      return res.data;
    }
  );

  console.log(instructors);
  return (
    <div className="w-4/5 my-10 mx-auto ">
      <h3 className="font-bold text-center mb-24 text-4xl">All Instructors</h3>

      <div className=" grid md:grid-cols-2 gap-12 mx-10">
        {instructors.map((instructor) => (
          <div
            key={instructor?._id}
            className=" bg-slate-900 text-white p-5 rounded-xl"
          >
            <div className=" space-y-5 ">
              <img className="w-60 mx-auto" src={instructor?.imgurl} alt="" />
              <div className="text-center">
                <h3 className="font-bold text-2xl  ms-3 ">
                  {instructor?.name}
                </h3>
                <h3 className="font-bold text-2xl  ms-3 ">
                  {instructor?.email}
                </h3>
              </div>
            </div>
            <div className=" text-center">
              <button className=" btn bg-black text-white ">See Classes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
