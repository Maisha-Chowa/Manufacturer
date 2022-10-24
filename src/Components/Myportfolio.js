import React from "react";
import pic from "../assets/circle-cropped.png";
const Myportfolio = () => {
  return (
    <div class="border border-gray-300 rounded-sm shadow-lg py-10 px-10 w-4/5 mt-10 mb-10">
      <h1> My Portfolio</h1>
      <h2> Here is my Resume</h2>
      <div className="container">
        <div className="row">
          <div className="col">
            <h2 className="text-info p-4">Maisha's Goals</h2>
            <p className="text-white-50  fs-6">
              <span className="text-info fs-5 pb-4">
                Helloooo !!! My name is Maisha Maliha Chowa . I am a CSE
                undergrad student. I am studying at Mawlana Bhashani Science and
                Technology University.
              </span>{" "}
              <br />
              <br />
              My ultimate goal is to become a Full Stack Developer. I have an
              immersed interest in BlockChain. That's why I am learning web
              development as it is the base for BlockChain. My short time goals
              are to complete this course with having a clear concept of all
              programming languages, frameworks, libraries, and others as
              possible. I also have a target to get an internship related to web
              development to get the real tech world feeling.
              <br />
              My long-term goal is to become an extremely good BlockChain
              Developer.{" "}
            </p>
          </div>
          <div className="col  ps-4 ms-4 ">
            <img src={pic} width="400px" alt="" />
          </div>
        </div>
      </div>

      <div>
        <h1>Live Site Link</h1>
        <h1>Project 1: click here to see detail's Project</h1>
        <a href="https://dentist-personal-website.web.app/">
          Rimi's Dental Care
        </a>{" "}
        <br />
        <h1>Project 2:click here to see detail's Project</h1>
        <a href="https://warehouse-management-fd99e.web.app/">
          Warehouse management
        </a>
      </div>
    </div>
  );
};

export default Myportfolio;
