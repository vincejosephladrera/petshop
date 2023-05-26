import React from "react";

const Homepage = () => {
  return (
    <div>
      <div className="flex justify-center overflow-y-hidden landing-page">
        <div className="landing-page min-h-screen  py-5 gap-y-5 gap-x-24 px-5 flex-grow max-w-[1440px] grid grid-cols-1 md:grid-cols-2 pt-[100px]">
          <div className="flex flex-col justify-center items-center gap-y-5 md:items-end">
            <h1 className="text-4xl font-black text-black tagline md:text-5xl italic">
              Fur-Parenting
              <br className="2xl:hidden" /> Made Easier
            </h1>
            <p className="text-lg md:text-2xl">
              We got all your needs from pet food to pet crates.
            </p>
            <button className="uppercase text-2xl  bg-gradient-to-r from-gray-800 to to-black text-white p-5 rounded-2xl flex-initial w-[250px] hover:text-yellow-200">
              View Shop
            </button>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-[460px] w-[250px] rounded-full image md:h-[400px] md:w-[400px] lg:w-[100%]  "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
