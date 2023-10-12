import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClasses = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("https://sports-academy-server-zeta.vercel.app/get-approve-classes")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  const sortedSports = Array.from(sports).sort(
    (a, b) => b.seatsAvailable - a.seatsAvailable
  );

  return (
    <div className="">
      <div className="text-center">
              <h2 className="text-3xl font-semibold md:text-5xl">
                Our {" "}
          
Popular Classes
              </h2>
              <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
                <p className="text-[#636262]">
                Inspiring Champions, One Athlete at a Time!
                </p>
              </div>
            </div>
      <div className=" grid md:grid-cols-3 gap-5 ">
        {sortedSports
          .slice(0, 6)
          .reverse()
          .map((sport) => (
            <div  key={sport._id} className="max-w-2xl mx-auto ">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg"  src={sport.imgURL}  alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2 dark:text-white">{sport.className}</h5>
                    </a>
                    <p className="font-normal dark:text-gray-400"> <span className="font-semibold">Instructor:</span>{" "}
                              {sport.instructorName}</p>
            
                              <p>
                              {" "}
                              <span className="font-semibold">Seats Available: </span>
                              {sport.availableSeats}
                            </p>
                            <p className="mb-3">
                              <span className="font-semibold">Price: $ </span>
                              {sport.price}
                            </p>
            
                    <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                    </a>
                </div>
            </div>
            
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularClasses;

