import React, { useEffect, useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularInstructer = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("popular.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);

  return (
    <div className="py-10">
      <SectionTitle title={"Our popular Instructer"}></SectionTitle>
      <div className=" grid grid-cols-3 gap-5 ">
        {instructors.slice(0, 6).map((instructor) => (
          <div key={instructor.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={instructor.photoUrl} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{instructor.name}</h2>
              {/* <p>{sport.description}</p> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructer;
