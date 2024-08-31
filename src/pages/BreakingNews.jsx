import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex gap-5 my-8 bg-gray-100 py-6 px-4">
      <button className="btn bg-[#D72050] text-xl px-6 py-2 text-white">Latest</button>
      <Marquee pauseOnHover={true}>
        <Link className="mr-10 text-[#403F3F] text-xl font-semibold" to={'/'}>Match Highlights: Germany vs Spain — as it happened  !</Link>
        <Link className="mr-10 text-[#403F3F] text-xl font-semibold" to={'/'}>I can be a React component, multiple React components, or just some
        text.</Link>
        <Link className="mr-10 text-[#403F3F] text-xl font-semibold" to={'/'}>I can be a React component, multiple React components, or just some
        text.</Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
