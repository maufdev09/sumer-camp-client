import React, { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h3>This is Home</h3>
    </div>
  );
};

export default Home;
