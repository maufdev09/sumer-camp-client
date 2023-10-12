import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Review = () => {
  const { data: reviews = [] } = useQuery(["reviews"], async () => {
    const res = await fetch(
      `https://sports-academy-server-zeta.vercel.app/get-reviews`
    );
    return res.json();
  });

  console.log(reviews);

  return (
    <>
     <section className="relative">
      <div className="mx-auto max-w-7xl py-10">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">What our clients are saying</h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">Thank you for taking the time to share your experience with SportPro Academy! We appreciate your support and look forward to welcoming you back !</p>
            </div>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-8 lg:mb-16 lg:gap-12">
  
        {reviews.map((review) => (

          <div key={review._id} className="mb-8 grid grid-cols-1 gap-6 rounded-2xl border border-solid border-black bg-white p-6 [box-shadow:rgb(0,_0,_0)_9px_9px] lg:mb-4">
          {/* Content */}
          <div className="flex">
            {/* Images */}
            {[...Array(5)].map((_, index) => (
              <img key={index} src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63904f663019b0ce62f8d5ba_Vector.svg" alt="" className="mr-1 inline-block w-3.5 flex-none" />
            ))}
          </div>
          <p className="text-[#636262]">{review.comment}</p>
          <div className="flex flex-row">
            <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905430069fb027f83abb71_Ellipse-3.jpg" alt="" className="mr-4 inline-block h-16 w-16 rounded-full object-cover" />
            <div className="flex flex-col">
              <h6 className="text-base font-semibold">{review.name}</h6>
              <p className="text-sm text-[#636262]">Student</p>
            </div>
          </div>
        </div>
        ))}
         </div>
        {/* <div className="flex flex-col items-center justify-center">
          <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get Started</a>
        </div> */}
      </div>
      <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg" alt="" className="absolute bottom-[auto] left-[auto] right-0 top-0 -z-10 inline-block max-[767px]:hidden" />
    </section>



    </>
  );
};

export default Review;


<section className="relative">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="mx-auto w-full max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-5xl">What <span className="bg-contain bg-center bg-no-repeat px-4 text-white" style={{ backgroundImage: "url('https://assets.website-files.com/63904f663019b0d8edf8d57c/6391714b7ac2b51acc1a2548_Rectangle%2017%20(1).svg')" }}>our clients</span> are saying</h2>
            <div className="mx-auto mb-8 mt-4 max-w-[528px] md:mb-12 lg:mb-16">
              <p className="text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
            </div>
          </div>
        </div>
        <div className="mb-8 grid grid-cols-1 md:mb-12 md:grid-cols-3 md:gap-8 lg:mb-16 lg:gap-12">
       {/* ............. */}
        </div>
        <div className="flex flex-col items-center justify-center">
          <a href="#" className="inline-block rounded-xl bg-black px-8 py-4 text-center font-semibold text-white [box-shadow:rgb(19,_83,_254)_6px_6px]">Get Started</a>
        </div>
      </div>
      <img src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639174a3de7d11bdf3ccbf01_Frame%20427322885.svg" alt="" className="absolute bottom-[auto] left-[auto] right-0 top-0 -z-10 inline-block max-[767px]:hidden" />
    </section>


//  <SwiperSlide key={review._id}>
// //   <div className="text-center rounded-2xl h-80 mb-10 bg-slate-200 pt-10 px-5">
// //     <h3 className="font-bold text-2xl  mb-2">{review.name}</h3>
// //     <p className="font-bold  ">Date:{review.date}</p>
// //     <div className="rating">
// //       <input 
// //         type="radio"
// //         name="rating-2"
// //         className="mask mask-star-2 bg-orange-400"
// //       />
// //       <input
// //         type="radio"
// //         name="rating-2"
// //         className="mask mask-star-2 bg-orange-400"
// //         checked
// //       />
// //       <input
// //         type="radio"
// //         name="rating-2"
// //         className="mask mask-star-2 bg-orange-400"
// //       />
// //       <input
// //         type="radio"
// //         name="rating-2"
// //         className="mask mask-star-2 bg-orange-400"
// //       />
// //       <input
// //         type="radio"
// //         name="rating-2"
// //         className="mask mask-star-2 bg-orange-400"
// //       />
// //     </div>
// //     <p className="font-semibold">{review.comment}</p>
// //   </div>
// // </SwiperSlide>