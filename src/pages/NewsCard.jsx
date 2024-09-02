import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, image_url, details, rating, total_view, _id, author } = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-4 border mb-8">
        <div className="bg-[#F3F3F3] px-5 py-3 rounded-t">
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <div>
                <img className="w-10 h-10 rounded-full" src={author.img} alt="" />
              </div>
              <div>
                <h3>{author.name}</h3>
                <p>{author.published_date}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <CiShare2 className="w-6 h-6"></CiShare2>
            <CiBookmark className="w-6 h-6"></CiBookmark>
            </div>
          </div>
        </div>
        <div className="my-5">
          <h2 className="card-title font-bold">{title}</h2>
        </div>
        <figure>
          <img className="w-full" src={image_url} alt="" />
        </figure>
        {details.length > 200 ? (
          <p className="text-[#706F6F] mt-8">
            {details.slice(0, 200)}{" "}
            <Link
              to={`/news/${_id}`}
              className="link link-primary font-semibold"
            >
              <span className="font-semibold">Read More...</span>
            </Link>
          </p>
        ) : (
          <p>{details}</p>
        )}
        <hr className="my-5" />
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <CiStar className="w-6 h-6 text-[#706F6F]"></CiStar>
            <span className="text-[#706F6F] font-medium">{rating.number}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="w-6 h-6 text-[#706F6F]"></FaEye>
            <span className="text-[#706F6F] font-medium">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
