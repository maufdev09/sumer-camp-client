import React from "react";
import Navbar from "../components/Shared/Navbar";
import Fotter from "../components/Shared/Fotter";
import { Link, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <li>
              <Link to="manage-classes">Manage Classe</Link>
            </li>
            <li>
              <Link to="manage-user">Manage User</Link>
            </li>
            <li>
              <Link to="add-class">Add Clases</Link>
            </li>
            <li>
              <Link to="my-class">My Clases</Link>
            </li>
            <li>
              <Link to="enrolled-class">Enrolled Class</Link>
            </li>
            <li>
              <Link to="selected-class">Selected Class</Link>
            </li>
          </ul>
        </div>
      </div>
      <Fotter></Fotter>
    </div>
  );
};

export default DashBoard;
