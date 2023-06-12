import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClasses = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch(
      "https://sports-pro-academy-production.up.railway.app/get-approve-classes"
    )
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  const sortedSports = Array.from(sports).sort(
    (a, b) => b.seatsAvailable - a.seatsAvailable
  );

  return (
    <div className="">
      <SectionTitle title={"Our  popular Classes"}></SectionTitle>
      <div className=" grid md:grid-cols-3 gap-5 ">
        {sortedSports
          .slice(0, 6)
          .reverse()
          .map((sport) => (
            <div key={sport._id} className="card bg-slate-200 shadow-xl p-4 ">
              <figure className=" w-11/12 mx-auto">
                <img className="w-full" src={sport.imgURL} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{sport.className}</h2>
                {/* <p>{sport.description}</p> */}
                <p>
                  {" "}
                  <span className="font-semibold">Instructor:</span>{" "}
                  {sport.instructorName}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Seats Available: </span>
                  {sport.availableSeats}
                </p>
                <p>
                  <span className="font-semibold">Price: $ </span>
                  {sport.price}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PopularClasses;
