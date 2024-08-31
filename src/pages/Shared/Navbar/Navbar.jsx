import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import profilePicture from "../../../assets/user.png"
import { AuthContext } from "../../../Providers/AuthProvider";

const Navbar = () => {
    const {user, logOut}= useContext(AuthContext);
    const handleSignOut = () => {
        logOut()
        .then(resutl => {
            console.log("Successfully logOut")
        })
        .catch(error => {
            console.error(error)
        })
    }

  const navLinks = (
    <>
      <li>
        <NavLink className="text-[#706F6F] text-lg" to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink className="text-[#706F6F] text-lg" to={"/about"}>About</NavLink>
      </li>
      <li>
        <NavLink className="text-[#706F6F] text-lg" to={"/career"}>Career</NavLink>
      </li>
      <li>
        <NavLink className="text-[#706F6F] text-lg" to={"/login"}>Login</NavLink>
      </li>
      <li>
        <NavLink className="text-[#706F6F] text-lg" to={"/register"}>Register</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src={profilePicture}/>
          </div>
        </div>
        {
            user ?
            <button onClick={handleSignOut} className="btn">Sign Out</button>
            :
            <Link to={"/login"}>
            <button className="text-xl text-white font-semibold bg-[#403F3F] px-10 py-2">Login</button>
          </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
