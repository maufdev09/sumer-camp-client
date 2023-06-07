import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import Fotter from "../components/Shared/Fotter";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Fotter></Fotter>
    </div>
  );
};

export default Root;
