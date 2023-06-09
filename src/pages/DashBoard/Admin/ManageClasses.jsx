import { useQuery } from "@tanstack/react-query";
import FeddbackModal from "./FeddbackModal";
import { useState } from "react";
import { data } from "autoprefixer";

const ManageClasses = () => {
  const [selectedClass, setSelectedClass] = useState(null);
  const { data: classes = [], refetch } = useQuery(["classes"], async () => {
    const res = await fetch("http://localhost:5000/get-classes");
    return res.json();
  });

  const modalData = (data) => {
    window.my_modal_2.showModal();
    setSelectedClass(data);
  };

  const handleFeedbackUpdate = (id, feedback, reset) => {
    console.log(id, feedback);
    reset();
  };

  return (
    <div
      className=" container mx-auto p-4
  "
    >
      <h1 className="text-2xl font-bold mb-4">Manage Classes</h1>
      {classes.map((classItem) => (
        <div
          key={classItem._id}
          className="flex flex-col justify-between md:flex-row items-start md:items-center bg-white p-4 border rounded shadow mb-4"
        >
          <img
            src={classItem.imgURL}
            className="w-32 h-32 object-cover rounded-lg md:mr-4"
            alt=""
          />
          <div className="flex flex-col">
            <p className="font-bold text-lg mb-2">{classItem.className}</p>
            <p>Instructor Name : {classItem.instructorName}</p>
            <p>Instructor Email : {classItem.instructorEmail}</p>
            <p>Available Seats : {classItem.availableSeats}</p>
            <p>Price : {classItem.price}</p>
            <p>Status : {classItem.status}</p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              disabled={classItem.status !== "pending"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Approve
            </button>
            <button
              disabled={classItem.status !== "pending"}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              Deny
            </button>
            <button
              onClick={() => modalData(classItem)}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
            >
              send Feedback
            </button>
          </div>
        </div>
      ))}

      {/* Open the modal using ID.showModal() method */}

      <FeddbackModal
        selectedClass={selectedClass}
        handleFeedbackUpdate={handleFeedbackUpdate}
      ></FeddbackModal>
    </div>
  );
};

export default ManageClasses;
