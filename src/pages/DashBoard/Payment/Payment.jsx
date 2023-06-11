import React from "react";
import CheckOutFrom from "./CheckOutFrom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

// Provide publishable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Getway_pk);

const Payment = () => {
  const location = useLocation();
  const classesitem = location.state;

  return (
    <div className="w-full">
      <h2>Teka</h2>
      <Elements stripe={stripePromise}>
        <CheckOutFrom classesitem={classesitem}></CheckOutFrom>
      </Elements>
    </div>
  );
};

export default Payment;
