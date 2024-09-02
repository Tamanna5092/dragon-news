import React from "react";
import Header from "./Shared/Header";
import Navbar from "./Shared/Navbar/Navbar";
import LeftSideNav from "./Shared/LeftSideNav/LeftSideNav";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20">
        <div>
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="md:col-span-2">
          <h4 className="text-xl text-[#403F3F] font-semibold mb-5">
            Dragon News Home
          </h4>
          <div>
            {news.map((aNews) => (
              <NewsCard key={aNews._id} news={aNews}></NewsCard>
            ))}
          </div>
        </div>
        <div>
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;