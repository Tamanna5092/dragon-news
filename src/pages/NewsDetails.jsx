import React from "react";
import Header from "./Shared/Header";
import RightSideNav from "./Shared/RightSideNav/RightSideNav";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Navbar from "./Shared/Navbar/Navbar";
import { FaArrowLeft } from "react-icons/fa";
import EditorInside from "./EditorInside";

const NewsDetails = () => {
  const news = useLoaderData();
  console.log(news);
  const { id } = useParams();
  const newsDetail = news.find((newsDetail) => newsDetail._id === id);
  console.log(newsDetail);

  return (
    <div>
      <Header></Header>
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 mt-8 gap-6">
        <div className="col-span-3">
          <div>
            <h4 className="text-xl text-[#403F3F] font-semibold mb-5">
              Dragon News
            </h4>
            <div className="card card-compact bg-base-100 border p-8">
              <figure>
                <img src={newsDetail.image_url} alt="" />
              </figure>
              <div className="mt-5">
                <h2 className="card-title text-2xl font-bold">
                  {newsDetail.title}
                </h2>
                <p className="text-[#706F6F]">{newsDetail.details}</p>
                <div className="card-actions mt-8">
                  <Link
                    to={"/"}
                    className="btn bg-[#D72050] font-medium text-white px-5 rounded-none"
                  >
                    <FaArrowLeft></FaArrowLeft> All news in this category
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div>
            <EditorInside></EditorInside>
          </div>
        </div>
        <div className="col-span-1">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
