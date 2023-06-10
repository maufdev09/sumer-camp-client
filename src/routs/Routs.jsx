import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../components/login/Login";
import Register from "../components/Register/Register";
import DashBoard from "../layouts/DashBoard";
import ManageClasses from "../pages/DashBoard/Admin/ManageClasses";
import ManageUsers from "../pages/DashBoard/Admin/ManageUsers";
import AddClass from "../pages/DashBoard/Instructor/AddClass";
import MyClass from "../pages/DashBoard/Instructor/MyClass";
import EnrolledClass from "../pages/DashBoard/Student/EnrolledClass";
import SelectedClass from "../pages/DashBoard/Student/SelectedClass";
import Classes from "../pages/Home/Classes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "classes",
        element: <Classes></Classes>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path: "manage-classes",
        element: <ManageClasses></ManageClasses>,
      },
      {
        path: "manage-user",
        element: <ManageUsers></ManageUsers>,
      },
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my-class",
        element: <MyClass></MyClass>,
      },

      {
        path: "enrolled-class",
        element: <EnrolledClass></EnrolledClass>,
      },
      {
        path: "selected-class",
        element: <SelectedClass></SelectedClass>,
      },
    ],
  },
]);
