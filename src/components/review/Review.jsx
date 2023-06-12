import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useQuery } from "@tanstack/react-query";

const Review = () => {
  const { data: reviews = [] } = useQuery(["reviews"], async () => {
    const res = await fetch(
      "https://sports-pro-academy-production.up.railway.app/get-reviews"
    );
    return res.json();
  });

  console.log(reviews);

  return (
    <>
      <h3 className="text-4xl font-bold my-20 text-center">Review</h3>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="text-center rounded-2xl h-80 mb-10 bg-slate-200 pt-10 px-5">
              <h3 className="font-bold text-2xl  mb-2">{review.name}</h3>
              <p className="font-bold  ">Date:{review.date}</p>
              <div className="rating">
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  className="mask mask-star-2 bg-orange-400"
                />
              </div>
              <p className="font-semibold">{review.comment}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Review;
