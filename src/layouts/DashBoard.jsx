import React, { useContext } from "react";
import Navbar from "../components/Shared/Navbar";
import Fotter from "../components/Shared/Fotter";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineFlightClass, MdOutlinePayment } from "react-icons/md";
import { SiGoogleclassroom } from "react-icons/si";

const DashBoard = () => {
  const { user } = useContext(AuthContext);

  const { data: userdata = [] } = useQuery(["userdata"], async () => {
    const res = await axios.get(
      `https://sports-academy-server-zeta.vercel.app/get-user-role/${user.email}`
    );
    return res.data;
  });

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center ">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Admin */}

            {userdata?.role === "admin" && (
              <>
                <li>
                  <Link to="manage-classes">
                    <MdOutlineFlightClass /> Manage Classe
                  </Link>
                </li>
                <li className="flex">
                  <Link to="manage-user">
                    {" "}
                    <AiOutlineUser />
                    Manage User
                  </Link>
                </li>
              </>
            )}

            {/* instructor */}

            {userdata?.role === "instructor" && (
              <>
                <li>
                  <Link to="add-class">
                    {" "}
                    <MdOutlineFlightClass />
                    Add Clases
                  </Link>
                </li>
                <li>
                  <Link to="my-class">
                    {" "}
                    <SiGoogleclassroom />
                    My Clases
                  </Link>
                </li>
              </>
            )}

            {/* student  */}
            {userdata?.role === "student" && (
              <>
                <li>
                  <Link to="enrolled-class">
                    <SiGoogleclassroom /> Enrolled Class
                  </Link>
                </li>
                <li>
                  <Link to="selected-class">
                    {" "}
                    <SiGoogleclassroom /> Selected Class
                  </Link>
                </li>
                <li>
                  <Link to="payment-history">
                    <MdOutlinePayment /> Payment History
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default DashBoard;
