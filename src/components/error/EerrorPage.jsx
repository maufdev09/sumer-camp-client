import React from "react";
import { Link, useRouteError } from "react-router-dom";

const EerrorPage = () => {
  const error = useRouteError();

  return (
    <div className=" flex flex-col items-center justify-center h-[100vh] ">
      <h1 className="text-5xl font-extrabold text-black my-10">
        SomeThing Went Wrong
      </h1>
      <p className="text text-4xl text-red-500  font-extrabold mb-5">Error</p>
      <p className="text text-4xl  font-extrabold mb-5">
        {error?.statusText || error.message}
      </p>
      <Link className="btn bg-black text-white hover:bg-slate-700" to="/">
        {" "}
        Go to homepage
      </Link>
    </div>
  );
};

export default EerrorPage;
