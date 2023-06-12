import { Link } from "react-router-dom";
import blackimg from "../../assets/logo/SportsPro Academy-logos_black.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import AdminRoute from "../../routs/AdminRoute";

{
  /* <li tabIndex={0}>
<details>
  <summary>Parent</summary>
  <ul className="p-2">
    <li>
      <a>Submenu 1</a>
    </li>
    <li>
      <a>Submenu 2</a>
    </li>
  </ul>
</details>
</li> */
}

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(toast.success("logout successfully"))
      .catch((err) => console.log(err));
  };

  const navoption = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="instructor">Instructors</Link>
      </li>
      <li>
        <Link to="/classes">Clases</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"
            >
              {navoption}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            <img className="w-52" src={blackimg} alt="" />
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            {navoption}
          </ul>
        </div>
        <div className="navbar-end">
          {user && (
            <div
              className="w-8 mx-5 tooltip tooltip-left"
              data-tip={user.displayName}
            >
              {user.photoURL ? (
                <img src={user.photoURL} alt="" className="rounded-full " />
              ) : (
                <FaUserCircle className=" text-4xl max-sm:text-2xl mx-3"></FaUserCircle>
              )}
            </div>
          )}
          {user ? (
            <button className="btn text-white bg-black" onClick={handleLogOut}>
              LogOUT
            </button>
          ) : (
            <Link to="/login" className="btn text-white bg-black">
              login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
