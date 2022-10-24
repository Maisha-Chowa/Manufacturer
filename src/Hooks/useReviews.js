import React, { useEffect, useState } from "react";
const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch(" https://polar-journey-63728.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [reviews]);
  return [reviews, setReviews];
};
export default useReviews;
