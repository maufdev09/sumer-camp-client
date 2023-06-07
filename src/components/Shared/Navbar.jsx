import { Link } from "react-router-dom";
import blackimg from "../../assets/logo/SportsPro Academy-logos_black.png";

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
  const navoption = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Instructors</Link>
      </li>
      <li>
        <Link>Clases</Link>
      </li>
      <li>
        <Link>Dashboard</Link>
      </li>
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
          <Link to="/login" className="btn bg-red-200">
            login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
