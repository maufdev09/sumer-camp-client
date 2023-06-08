import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClasses = () => {
  const [sports, setSports] = useState([]);
  useEffect(() => {
    fetch("sports.json")
      .then((res) => res.json())
      .then((data) => setSports(data));
  }, []);

  const sortedSports = Array.from(sports).sort(
    (a, b) => b.seatsAvailable - a.seatsAvailable
  );

  return (
    <div className="">
      <SectionTitle title={"Our  popular Classes"}></SectionTitle>
      <div className=" grid grid-cols-3 gap-5 ">
        {sortedSports
          .slice(0, 6)
          .reverse()
          .map((sport) => (
            <div key={sport.id} className="card bg-base-100 shadow-xl">
              <figure>
                <img src={sport.image} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{sport.name}</h2>
                {/* <p>{sport.description}</p> */}
                <p>
                  {" "}
                  <span className="font-semibold">Instructor:</span>{" "}
                  {sport.instructor}
                </p>
                <p>
                  {" "}
                  <span className="font-semibold">Seats Available: </span>
                  {sport.seatsAvailable}
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
