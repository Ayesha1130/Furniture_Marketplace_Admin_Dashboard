import React from "react"
import Link from "next/link";
const Hero = () => {
  return (
    <div className="bg-[url(/images/heropic.jpg)] bg-cover bg-center h-screen ">
      <div className="flex justify-center items-center text-center pt-5">
        <div className="bg-[#F6F6F6] w-full md:w-1/2 p-5 md:p-10 lg:p-20">
          <div>
            <h1 className="text-2xl font-serif">
              Luxury homeware for people who love timeless design quality
            </h1>
            <p className="text-base mt-5">
              Shop the new Spring 2022 collection today
            </p>
          </div>
          <div className="pt-10">
            <Link
              href="/product"
              className="bg-[#FFFFFF]  py-[15px] px-[32px] text-center border border-gray-300 hover:bg-[#F1F1F1] focus:outline-none"
            >
              View collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
