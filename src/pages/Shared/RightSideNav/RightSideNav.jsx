import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import qZone1 from "../../../assets/qZone1.png";
import qZone2 from "../../../assets/qZone2.png";
import qZone3 from "../../../assets/qZone3.png";
import AmazingNews from "../../AmazingNews";

const RightSideNav = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
          Login with
        </h2>
        <div className="space-y-4">
          <button className="btn btn-outline btn-info w-full">
            <FaGoogle className="h-6 w-6"></FaGoogle>
            Login with Google
          </button>
          <button className="btn btn-outline w-full">
            <FaGithub className="h-6 w-6"></FaGithub>
            Login with Github
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h2 className="text-xl text-[#403F3F] font-semibold mb-5">
          Find Us On
        </h2>
        <a
          className="flex p-4 text-lg items-center border rounded-t-md"
          href=""
        >
          <FaFacebook className="h-6 w-6 mr-3 rounded-full text-blue-800"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="flex p-4 text-lg items-centerg border-x" href="">
          <FaTwitter className="h-6 w-6 mr-3 rounded-full text-blue-400"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a
          className="flex p-4 text-lg items-center border rounded-b-md"
          href=""
        >
          <FaInstagram className="h-6 w-6 mr-3 rounded-full text-red-400"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="mt-8 bg-[#F3F3F3]">
        <h2 className="text-xl text-[#403F3F] font-semibold pl-4 pt-4">
          Q-Zone
        </h2>
        <img className="w-full" src={qZone1} alt="" />
        <img className="my-5 w-full" src={qZone2} alt="" />
        <img className="w-full" src={qZone3} alt="" />
        <AmazingNews></AmazingNews>
      </div>
    </div>
  );
};

export default RightSideNav;
