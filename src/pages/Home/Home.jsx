import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Carosel from "../../components/carousel/Carosel";
import PopularClasses from "../../components/Popularclasses/PopularClasses";
import PopularInstructer from "../../components/PopularInstructor/PopularInstructer";
import Review from "../../components/review/Review";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Carosel></Carosel>

      <PopularClasses></PopularClasses>
      <PopularInstructer></PopularInstructer>
      <Review></Review>
    </div>
  );
};

export default Home;
