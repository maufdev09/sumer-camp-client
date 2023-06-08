import React, { useEffect } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

const PopularClasses = () => {
  useEffect(() => {
    fetch(sports.json)
      .then((res) => res.json())
      .then((data) => console.log(data.sports));
  }, []);

  return (
    <div>
      <SectionTitle title={"Top 6 popular Classes"}></SectionTitle>
    </div>
  );
};

export default PopularClasses;
