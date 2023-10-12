import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const SelectedClass = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(
      `https://sports-academy-server-zeta.vercel.app/get-selected-classes/${user.email}`
    );
    return res.json();
  });

  const handledlt = (id) => {
    fetch(
      `https://sports-academy-server-zeta.vercel.app/dlt-selected-classes/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Item was deleted");
          refetch();
        }
      });
  };

  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Class Name</th>
            <th>Price</th>
            <th> Pay</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}

          {classes.map((classesitem, i) => (
            <tr key={classesitem._id}>
              <td>{i + 1}</td>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classesitem.imgURL} />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{classesitem.className}</div>
                  </div>
                </div>
              </td>
              <td>$ {classesitem.price}</td>
              <td>
                <Link to="/dashboard/payment" state={classesitem}>
                  <button className="btn bg-black btn-xs text-white">
                    pay
                  </button>
                </Link>
              </td>
              <th>
                <button
                  onClick={() => handledlt(classesitem._id)}
                  className="btn btn-error btn-xs"
                >
                  Delete
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectedClass;
