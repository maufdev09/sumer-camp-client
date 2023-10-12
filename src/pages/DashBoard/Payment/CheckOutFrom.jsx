import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProviders";
import { toast } from "react-hot-toast";
import "./CheckOutForm.css";
import { useNavigate } from "react-router-dom";

const CheckOutFrom = ({ classesitem }) => {
  const price = classesitem?.price;

  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://sports-academy-server-zeta.vercel.app/create-payment-intent`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ price }),
      }
    )
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonumous",
            name: user?.displayName || "anonym",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        user: user?.email,
        transactionId: paymentIntent.id,
        price,
        classItemId: classesitem?.classItemId,
        selectedClassId: classesitem?._id,
        date: new Date(),
        image: classesitem?.imgURL,
        className: classesitem?.className,
        instructorName: classesitem?.instructorName,
        instructorEmail: classesitem?.instructorEmail,
        totalEnrolledStudent: classesitem?.totalEnrolledStudent,
        availableSeats: classesitem?.availableSeats,
      };
      fetch(`https://sports-academy-server-zeta.vercel.app/payments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payment),
      })
        .then((res) => res.json())
        .then((data) => {
          if (
            data.insertresult.insertedId &&
            data.deleteResult.deletedCount > 0
          ) {
            navigate("/dashboard/selected-class");
            toast.success(
              "your payment is successfully done  and this item will deleted from your selected class"
            );
          }
        });
    }
  };

  return (
    <>
      <form className=" m-8 mx-auto  " onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="w-2/3 btn mt-10 bg-black text-white hover:bg-slate-600"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {cardError && (
        <p className="text-red-600 font-bold text-center">{cardError}</p>
      )}
      {transactionId && (
        <p className="font-bold text-center">
          Your payment successfully done. Your transaction id is:{" "}
          <span className="text-green-600 w-2/3 text-center">
            {transactionId}
          </span>
        </p>
      )}
    </>
  );
};

export default CheckOutFrom;
