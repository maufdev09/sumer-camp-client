import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularInstructer = () => {
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axios.get(
        `https://sports-pro-academy-production.up.railway.app/get-instructors`
      );
      return res.data;
    }
  );

  const displayInstructor = instructors.slice(0, 6);

  return (
    <div className="  my-10 ">
      <h3 className="font-bold text-center my-24 text-4xl">Top Instructors</h3>

      <div className=" grid md:grid-cols-2 gap-12 mx-10">
        {displayInstructor.map((instructor) => (
          <div
            key={instructor?._id}
            className=" bg-slate-200 shadow-xl p-5 rounded-xl"
          >
            <div className=" space-y-5 ">
              <img className="w-2/4 mx-auto" src={instructor?.imgurl} alt="" />
              <div className="text-center">
                <h3 className="font-bold text-2xl  ms-3 ">
                  {instructor?.name}
                </h3>
              </div>
            </div>
            <div className=" text-center">
              <Link to="/classes">
                <button className=" btn bg-black text-white ">
                  See Classes
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructer;
