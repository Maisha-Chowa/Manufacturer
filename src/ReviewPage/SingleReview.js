import React from "react";

const SingleReview = ({ review }) => {
  const { author, img, text, rating } = review;

  function countRating(n) {
    let stars = [];
    for (var i = 0; i < n; i++) {
      stars.push(
        <input
          type="radio"
          name="rating-2"
          className="mask mask-star-2 bg-orange-400"
        />
      );
    }
    return <div>{stars}</div>;
  }

  //   const stars = (
  //     <div className="rating">
  //       <input
  //         type="radio"
  //         name="rating-2"
  //         className="mask mask-star-2 bg-orange-400"
  //       />
  //     </div>
  //   );
  return (
    <div className="card  lg:max-w-lg  bg-base-100 shadow-xl">
      <div className="card-body">
        <p>{text}</p>
      </div>
      <div className="flex py-8">
        <div className="avatar px-8">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={img} />
          </div>
        </div>
        <div>
          <h2 className="card-title text-accent">{author}</h2>
          {/* <p className="text-accent">{stars}</p> */}
          <div className="rating">{countRating(rating)}</div>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
