import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularInstructer = () => {
  const { data: instructors = [], refetch } = useQuery(
    ["instructors"],
    async () => {
      const res = await axios.get(
        `https://sports-academy-server-zeta.vercel.app/get-instructors`
      );
      return res.data;
    }
  );

  const displayInstructor = instructors.slice(0, 6);

  const img1= "https://assets.website-files.com/63904f663019b0d8edf8d57c/63980b423c019a5273ee5c6e_Rectangle%2040024.jpg"

  return (
    <div className="px-5 md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="">
            <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                Our {" "}
          
                Instructors
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                Where Skills Meet Ambition: SportPro Academy!
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-full grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-4 md:gap-2 lg:gap-4">
              {displayInstructor.map((instructor) => (
           
                <div
                  key={instructor?._id}
                  className="flex grid-cols-1 flex-col items-center justify-center gap-4 rounded-xl border border-solid border-[#636262] bg-white px-4 py-8 shadow-md max-w-[991px] text-left md:max-w-[288px] md:p-8 md:text-center lg:w-full"
                >
                  <img
                    src={img1}
                    alt=""
                    className="mb-4 inline-block h-56 w-full max-w-full rounded-xl object-cover lg:h-56"
                  />
                  <div className="mb-2 font-bold"> {instructor?.name}</div>
                  <div className=" text-center">
                     <Link to="/classes">
                      <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                         See Classes
                      </button>
                     </Link>
                   </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructer;

<div className="px-5 md:px-10">
  <div className="mx-auto w-full max-w-7xl">
    <div className="py-16 md:py-24 lg:py-32">
      <div className="">
        <div className="text-center">
          <h2 className="text-3xl font-semibold md:text-5xl">
            Our Team{" "}
            <span
              className="bg-cover bg-center bg-no-repeat px-4 text-white"
              style={{
                backgroundImage:
                  "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/639156ce1c70c97aeb755c8a_Rectangle%2010%20(1).svg')",
              }}
            >
              Members
            </span>
          </h2>
          <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
            <p className="text-[#636262]">
              Lorem ipsum dolor sit amet elit ut aliquam
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1040px] grid-cols-1 justify-items-center gap-5 sm:grid-cols-2 sm:justify-items-stretch md:grid-cols-3 md:gap-4 lg:gap-6">
    {/* content will be here */}
        </div>
      </div>
    </div>
  </div>
</div>;
