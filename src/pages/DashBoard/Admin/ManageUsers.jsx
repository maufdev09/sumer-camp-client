import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useEffect } from "react";
import { toast } from "react-hot-toast";

const ManageUsers = () => {
  // const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/get-user")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);

  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("http://localhost:5000/get-user");
    return res.json();
  });

  const handleMakeAdmin = (id) => {
    const user = {
      role: "admin",
    };

    fetch(`http://localhost:5000/update-user-role/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Admin crested sucess fully");
          refetch();
        }
      });
  };

  const handleMakeInstructor = (id) => {
    const user = {
      role: "instructor",
    };

    fetch(`http://localhost:5000/update-user-role/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("instructor crested sucess fully");
          refetch();
        }
      });
  };

  return (
    <div className="w-full  mx-5">
      <div className="overflow-x-auto">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>
                  <button
                    onClick={() => handleMakeInstructor(user._id)}
                    disabled={user.role === "instructor"}
                    className="btn"
                  >
                    Instructor
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleMakeAdmin(user._id)}
                    disabled={user.role === "admin"}
                    className="btn"
                  >
                    Admin
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUsers;
