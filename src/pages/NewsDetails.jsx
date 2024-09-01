import React from "react";
import Header from "./Shared/Header";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import { useParams } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";

const NewsDetails = () => {
    const {id} = useParams();
  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-8">
        <div className="col-span-3">
            <h2>Dragon News</h2>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
