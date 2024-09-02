import React, { useContext } from "react";
import Navbar from "./Shared/Navbar/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const from = new FormData(e.currentTarget);
    const name = from.get("name");
    const photo = from.get("photo");
    const email = from.get("email");
    const password = from.get("password");
    // console.log(name, photo, email, password);

    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-3xl text-center my-10">Register your account</h1>
        <form onSubmit={handleRegister} className="md:w-3/4 lg:w-1/2 mx-auto">
          <hr className="my-12" />
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="name"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="photo url"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#403F3F] text-white">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">
          Already have an account?{" "}
          <Link className="link text-[#F75B5F] font-semibold" to={"/login"}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
