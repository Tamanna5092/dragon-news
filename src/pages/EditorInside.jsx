import React from "react";
import editor1 from "../assets/editorsInsight1.png";
import editor2 from "../assets/editorsInsight2.png";
import editor3 from "../assets/editorsInsight3.png";
import icon from "../assets/Frame.png";
import moment from "moment";

const EditorInside = () => {
  return (
    <div>
      <div className="space-y-6">
        <h2 className="text-xl text-[#403F3F] font-semibold mt-5">
          Editors Insight
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="card card-compact bg-base-100 rounded-md my-6">
          <figure>
            <img className="w-full" src={editor1} alt="" />
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
                <p className="ml-2 text-[#9F9F9F] font-medium">
                  {moment().format("MMMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 rounded-md my-6">
          <figure>
            <img className="w-full" src={editor2} alt="" />
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
                <p className="ml-2 text-[#9F9F9F] font-medium">
                  {moment().format("MMMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card card-compact bg-base-100 rounded-md my-6">
          <figure>
            <img className="w-full" src={editor3} alt="" />
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
                <p className="ml-2 text-[#9F9F9F] font-medium">
                  {moment().format("MMMM D, YYYY")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorInside;
