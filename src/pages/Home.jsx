import React from "react";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar/Navbar";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
        <div className="border">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2 border">
          <h4 className="text-3xl">Dragon News Home</h4>
        </div>
        <div className="border">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
