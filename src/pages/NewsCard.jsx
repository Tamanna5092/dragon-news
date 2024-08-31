import React from "react";
import { CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const {title, image_url, details, rating, total_view, _id} = news;
  return (
    <div>
      <div className="card bg-base-100 shadow-xl p-4">
        <div className="card-body">
          <h2 className="card-title">{title}</h2> 
        </div>
        <figure>
          <img
          className="w-full"
            src={image_url}
            alt=""
          />
        </figure>
         {
            details.length > 200 ? <p>{details.slice(0, 200)} <Link
            to={`/news/${_id}`}
            className="link link-primary font-semibold">Read More...</Link></p>
            : 
            <p>{details}</p>
         }
        <div>
        <div>
        <CiStar></CiStar>
        <span></span>
        </div>
        <div>
        <FaEye></FaEye>
        <span></span>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
