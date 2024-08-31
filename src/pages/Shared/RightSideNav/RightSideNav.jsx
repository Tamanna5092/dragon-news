import React from "react";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';
import bg1 from '../../../assets/bg1.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-4">
        <h2 className="text-3xl font-bold">Login with</h2>
        <button className="btn btn-outline btn-info w-full">
          <FaGoogle className="h-6 w-6"></FaGoogle>
          Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub className="h-6 w-6"></FaGithub>
          Login with Github
        </button>
      </div>
      <div className="p-4 mt-8">
        <h2 className="text-3xl font-bold mb-8">Find Us On</h2>
        <a className="flex p-4 text-lg items-center border rounded-t-md" href="">
          <FaFacebook className="h-6 w-6 mr-3 rounded-full text-blue-800"></FaFacebook>
          <span>Facebook</span>
        </a>
        <a className="flex p-4 text-lg items-centerg border-x" href="">
          <FaTwitter className="h-6 w-6 mr-3 rounded-full text-blue-400"></FaTwitter>
          <span>Twitter</span>
        </a>
        <a className="flex p-4 text-lg items-center border rounded-b-md" href="">
          <FaInstagram className="h-6 w-6 mr-3 rounded-full"></FaInstagram>
          <span>Instagram</span>
        </a>
      </div>
      <div className="p-4 mt-8">
        <h2 className="text-3xl font-bold mb-8">Q-Zone</h2>
         <img src={qZone1} alt="" />
         <img className="my-5" src={qZone2} alt="" />
         <img src={qZone3} alt="" />
         <div className="mt-5">
         <img className="" src={bg1} alt="" />
         </div>
      </div>
    </div>
  );
};

export default RightSideNav;
