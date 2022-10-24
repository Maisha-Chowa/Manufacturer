import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

// author  text rating
const MyReviews = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user, loading, error] = useAuthState(auth);

  const handleReviewInfo = (event) => {
    event.preventDefault();

    const review = event.target.review.value;
    const rating = event.target.rating.value;
    const ReviewInfo = {
      author: user.displayName,
      img: "https://api.lorem.space/image/face?hash=64318",
      text: review,
      rating: rating,
    };

    console.log(ReviewInfo);

    fetch(" https://polar-journey-63728.herokuapp.com/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(ReviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {});
  };

  return (
    <div>
      <h3 className="font-bold text-lg text-primary">My Review</h3>
      <form
        onSubmit={handleReviewInfo}
        className="grid grid-cols-1 gap-2 w-48 justify-items-center mt-2"
      >
        <input
          type="text"
          name="review"
          placeholder="Review"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type="text"
          name="rating"
          placeholder="Rating"
          required
          className="input input-bordered w-full max-w-xs"
        />
        <input
          className="btn btn-primary  text-white input input-bordered w-full max-w-xs "
          type="submit"
          placeholder="Submit"
          value="Submit"
          id="booking-modal"
        />
      </form>
    </div>
  );
};

export default MyReviews;
