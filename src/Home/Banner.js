import React from "react";
import bgExtra from "../assets/bgExtra.jpg";
const Banner = () => {
  return (
    <section>
      <div className="carousel w-full my-12">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://media.gettyimages.com/photos/multiethnic-workers-talking-in-metal-fabrication-plant-picture-id1128758749?s=612x612"
            className="w-full"
          />{" "}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://www.industr.com/en/__image/a/2348147/alias/xl/ar/16-9/fn/Image%20template.jpg"
            className="w-full"
          />{" "}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://www.knic.co.id/uploads/6/business-process-in-a-manufacturing-company.jpg"
            className="w-full"
          />{" "}
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="card card-side w-9/12 h-96 glass mx-auto  mt-[-100px]">
        <figure>
          <img
            src="https://cloud-jpn.com/wp-content/uploads/2015/06/company-profile-img.jpg?w=200&h=280"
            alt="Movie"
          />
        </figure>
        <div className="card-body ">
          <h2 className="card-title py-4">About Company</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
        <div className="card-body ">
          <h2 className="card-title py-4">About Company</h2>
          <ul className="steps steps-vertical">
            <li className="step step-primary">Register</li>
            <li className="step step-primary">Choose plan</li>
            <li className="step">Purchase</li>
            <li className="step">Receive Product</li>
          </ul>
        </div>
        <figure>
          <img
            src="https://cloud-jpn.com/wp-content/uploads/2015/06/company-profile-img.jpg?w=200&h=280"
            alt="Movie"
          />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
