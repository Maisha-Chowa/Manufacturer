import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../firebase.init";

const MyProfile = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const [user, loading, error] = useAuthState(auth);
  const [profile, setProfile] = useState({});

  useEffect(() => {
    fetch(` https://polar-journey-63728.herokuapp.com/profile/${email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("getprofileinfo", data);
        setProfile(data);
      });
    //console.log("profileinfo", profile);
  }, [profile]);

  const { name, email, location, phone } = profile;

  const handleProfileInfo = (event) => {
    event.preventDefault();

    const location = event.target.location.value;
    const phone = event.target.phone.value;
    const linkedin = event.target.linkedin.value;
    const profileInfo = {
      user: user.displayName,
      email: user.email,
      location: location,
      phone: phone,
      linkedin: linkedin,
    };

    console.log(profileInfo);
    fetch("https://polar-journey-63728.herokuapp.com/profile", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(profileInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
      });
    console.log("profileinfo", profile);
  };
  return (
    <div>
      <div>
        <h3 className="font-bold text-lg text-primary">My Profile</h3>

        <h1>Name: {user.displayName}</h1>
        <h1>Email: {user.email}</h1>
        <h1>{profile.phone}</h1>
        <h1>{profile.location}</h1>
        {/* {
        profile.map(a=> (
         
          <h2>{user}</h2>
          <h2>{email}</h2>
          <h2>{location}</h2>
          <h2>{phone}</h2>
        ))

        } */}
      </div>
      <h3 className="font-bold text-lg text-primary"> Profile Information</h3>
      <form
        onSubmit={handleProfileInfo}
        className="grid grid-cols-1 gap-2 w-96 justify-items-center mt-2"
      >
        <input
          type="text"
          name="location"
          placeholder="Enter your location"
          required
          className="input input-bordered w-96 max-w-xs"
        />
        <input
          type="text"
          name="phone"
          placeholder="Mobile no"
          required
          className="input input-bordered w-96 max-w-xs"
        />
        <input
          type="text"
          name="linkedin"
          placeholder="Linkedin profile link"
          className="input input-bordered w-96 max-w-xs"
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

export default MyProfile;
