import React from "react";
import { useForm } from "react-hook-form";

const FeddbackModal = ({ selectedClass, handleFeedbackUpdate }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const feedback = data.feedback;
    const id = selectedClass?._id;

    handleFeedbackUpdate(id, feedback, reset);
  };

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     const form = event.target;

  //     const feedback = form?.feedback.value;
  //     const id = selectedClass?._id;

  //     handleFeedbackUpdate(id, feedback);
  //   };

  return (
    <dialog id="my_modal_2" className="modal">
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="dialog"
        className="modal-box"
      >
        <h3 className="font-bold text-lg">Give Your FeedBack</h3>
        <div className="form-control">
          <textarea
            {...register("feedback", { required: true })}
            name="feedback"
            className="textarea textarea-bordered h-24"
          ></textarea>
          <label className="label"></label>
          {errors.feedback && <span>This field is required</span>}
        </div>
        <div className="text-right">
          <input type="submit" className="btn btn-warning" />
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default FeddbackModal;
