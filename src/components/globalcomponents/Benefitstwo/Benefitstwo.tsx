import React from "react";
const Benefitstwo = () => {
  return (
    <div className="bg-[#F9F9F9] mt-40 h-[444px]">
      <div className="py-10">
        <div className="bg-white rounded mx-4 sm:mx-10 md:mx-36 py-5">
          <div className="text-[#2A254B] ">
            <div className="flex flex-col text-center p-10">
              <h2 className="text-2xl text-center sm:text-3xl md:text-4xl font-serif">
                Join the club and get the benefits
              </h2>
              <p className="mx-auto max-w-3xl md:px-44 mt-5 text-sm sm:text-base font-serif">
                Sign up for our newsletter and receive exclusive offers on new
                ranges, sales, pop-up stores, and more.
              </p>
            </div>

            <div className="flex mx-5 justify-center">
              <input
                type="text"
                placeholder="your@email.com"
                className="p-3 rounded-l-md border  border-slate-500 text-black focus:outline-none w-full md:w-80 "
              />
              <button className="bg-[#2A254B] p-3 rounded-r-md md:ml-5 lg:ml-[-50px] text-white w-[118px]">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefitstwo;
