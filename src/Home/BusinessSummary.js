import React from "react";
const BusinessSummary = () => {
  return (
    <div>
      <h2> BusinessSummary</h2>
      <div className="stats  p-10 sm:stats-vertical lg:stats-horizontal  flex justify-evenly">
        <div className="stat bg-info-content shadow border-r-4 border-yellow-400 rounded-lg mr-12">
          <div className="mask mask-hexagon-2 bg-yellow-400 w-40 h-40 px-8  flex items-center ">
            <h2 className="text-center text-4xl"> 100k+</h2>
          </div>
          <div className="stat-value flex items-center text-yellow-400">
            Customers
          </div>
        </div>
        <div className="stat bg-info-content shadow border-r-4 border-yellow-400 rounded-lg mr-12">
          <div className="mask mask-hexagon-2 bg-yellow-400 w-40 h-40 px-8  flex items-center ">
            <h2 className="text-center text-4xl"> 120M+</h2>
          </div>
          <div className="stat-value flex items-center text-yellow-400">
            Annual revenue
          </div>
        </div>
        <div className="stat bg-info-content shadow border-r-4 border-yellow-400 rounded-lg mr-12">
          <div className="mask mask-hexagon-2 bg-yellow-400 w-40 h-40 px-8  flex items-center ">
            <h2 className="text-center text-4xl"> 33K+</h2>
          </div>
          <div className="stat-value flex items-center text-yellow-400">
            Reviews
          </div>
        </div>
        <div className="stat bg-info-content shadow border-r-4 border-yellow-400 rounded-lg ">
          <div className="mask mask-hexagon-2 bg-yellow-400 w-40 h-40 px-8  flex items-center ">
            <h2 className="text-center text-4xl"> 500+</h2>
          </div>
          <div className="stat-value flex items-center text-yellow-400">
            Tools
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessSummary;
