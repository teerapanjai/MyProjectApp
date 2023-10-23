import React, { useEffect, useState } from "react";
import BannerCard from "../home/BannerCard.jsx";

const Banner = () => {
  const [image, setImage] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/book/images")
      .then((res) => res.json())
      .then((data) => setImage  (data));
  }, []);

  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell You Books{" "}
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil quas
            magni esse nisi voluptas earum error similique ex beatae nobis? Iure
            voluptas dolorem deserunt earum eligendi quidem ut fugit modi!
          </p>
          <div>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Seach a Book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <BannerCard images={image} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
