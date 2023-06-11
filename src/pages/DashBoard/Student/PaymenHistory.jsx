import React, { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";

const PaymenHistory = () => {
  const { user } = useContext(AuthContext);

  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch(
      `http://localhost:5000/get-payed-classes/${user.email}`
    );
    return res.json();
  });

  console.log(classes);
  console.log(classes);
  return (
    <div className="overflow-x-auto w-full">
      <h3 className="font-bold text-center mb-24 text-4xl">Payment History</h3>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>#</label>
            </th>
            <th>Name</th>
            <th>price</th>
            <th>Transaction Id</th>
            <th>DATE</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {classes.map((classitem, i) => (
            <tr key={classitem._id} className="">
              <th>
                <label>{i + 1}</label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classitem.image} alt="Avatar" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{classitem.className}</div>
                  </div>
                </div>
              </td>
              <td>{classitem.price}</td>
              <td>{classitem.transactionId}</td>
              <td>{format(new Date(classitem.date), "HH:mm MMM d, yy  ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymenHistory;
