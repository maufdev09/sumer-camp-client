import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const InstructorRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const { data: isInstructor = [], isLoading } = useQuery(
    ["isInstructor"],
    async () => {
      const res = await axios.get(
        `https://sports-pro-academy-production.up.railway.app/isInstructor/${user.email}`
      );
      return res.data;
    }
  );

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <span className="loading loading-bars loading-lg text-black"></span>
      </div>
    );
  }

  if (user && isInstructor) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
