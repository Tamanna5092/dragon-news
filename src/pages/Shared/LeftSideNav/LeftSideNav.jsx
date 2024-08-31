import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../../../assets/1.png";
import img2 from "../../../assets/2.png";
import img3 from "../../../assets/3.png";
import icon from "../../../assets/Frame.png";
import moment from "moment";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-3xl">All Caterogy {categories.length}</h2>
        <h3 className="w-full text-center text-xl bg-gray-200 font-semibold py-4 rounded-md">
          National News
        </h3>
        {categories.map((category) => (
          <Link
            to={`/category/${category.id}`}
            className="block text-xl text-[#9F9F9F] font-medium ml-5"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
      <div>
        <div className="card card-compact bg-base-100 shadow-xl rounded-md">
          <figure>
            <img src={img1} alt="" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Bayern Slams Authorities Over Flight Delay to Club World Cup
            </h2>
            <div className="flex gap-5 items-center">
              <div>
                <h4 className="font-medium">Sports</h4>
              </div>
              <div className="flex items-center">
                <img src={icon} alt="" />
                <p className="ml-2 text-[#9F9F9F] font-medium">{moment().format("MMMM D, YYYY")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNav;
