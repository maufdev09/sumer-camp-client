import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import Carosel from "../../components/carousel/Carosel";
// import PopularClasses from "../../components/Popularclasses/PopularClasses";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <Carosel></Carosel>
      <div>{/* <PopularClasses></PopularClasses> */}</div>
    </div>
  );
};

export default Home;
