import React, { useEffect, useState } from "react";
import people1 from "../assets/ReviewImages/people1.png";
import people2 from "../assets/ReviewImages/people2.png";
import people3 from "../assets/ReviewImages/people3.png";
import useReviews from "../Hooks/useReviews";
import SingleReview from "./SingleReview";

const ReviewPage = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <section>
      <div className="flex justify-between my-28">
        <div>
          <p className="text-5xl font-bold text-yellow-400  pt-8">
            Our Clients Reviews
          </p>
          {/* <h2 className="text-5xl font-bold text-accent py-6">
            {reviews.length}
          </h2> */}
        </div>
      </div>
      <div className="mb-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-5">
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </section>
  );
};

export default ReviewPage;

// const reviews = [
//   {
//     _id: 1,
//     name: "Winson Herry",
//     review:
//       "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
//     location: "California",
//     img: people1,
//   },
//   {
//     _id: 2,
//     name: "Winson Herry",
//     review:
//       "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
//     location: "California",
//     img: people2,
//   },
//   {
//     _id: 3,
//     name: "Winson Herry",
//     review:
//       "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using Content here, content",
//     location: "California",
//     img: people3,
//   },
// ];
