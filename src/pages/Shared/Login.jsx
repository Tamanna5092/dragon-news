import React from "react";
import Navbar from "./Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = (e) => {
        e.preventDefault();
        // const email = e.target.email.value;
        // const password = e.target.password.value;
        // console.log(email, password)
        console.log(e.currentTarget);
        const from = new FormData(e.currentTarget)
        console.log(from.get('password'))
    }

  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h1 className="text-3xl text-center my-10">Please Login</h1>
        <form onSubmit={handleLogin} className="md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
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
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Dont’t have an account? <Link to={'/register'}>Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
