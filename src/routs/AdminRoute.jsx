import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  const { data: isAdmin = [], isLoading } = useQuery(["isAdmin"], async () => {
    const res = await axios.get(
      `https://sports-pro-academy-production.up.railway.app/isAdmin/${user.email}`
    );
    return res.data;
  });

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center ">
        <span className="loading loading-bars loading-lg text-black"></span>
      </div>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
