import React from "react";
import Banner from "./Banner";
import Summary from "./BusinessSummary";
import Tools from "./Tools";
import Reviews from "./Reviews";
import BusinessSummary from "./BusinessSummary";
import ReviewPage from "../ReviewPage/ReviewPage";
import useReviews from "../Hooks/useReviews";
import SingleReview from "../ReviewPage/SingleReview";
import ExtraPart1 from "./ExtraPart1";

const Home = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <Banner></Banner>
      {/* <ExtraPart1></ExtraPart1> */}
      <Tools></Tools>
      <BusinessSummary></BusinessSummary>
      <p className="text-5xl text-center font-bold text-yellow-400 p-8">
        Top Reviews
      </p>
      <div className="mb-12 grid sm:grid-cols-1 lg:grid-cols-4 gap-5">
        {reviews.slice(0, 4).map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Home;
