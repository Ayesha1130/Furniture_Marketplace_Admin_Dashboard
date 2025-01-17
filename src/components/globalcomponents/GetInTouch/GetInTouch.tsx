import React from "react";
import Image from "next/image";

const GetInTouch = () => {
  return (
    <div className="flex flex-col lg:flex-row  px-10 mt-10 mb-10">
      <div className="relative w-full lg:w-1/2 h-[603] ">
        <Image
          src="/images/get.jpg"
          alt="Hero Image"
          layout="responsive"
          width={720}
          height={603}
          className="w-full object-cover"
        />
      </div>

      <div className=" bg-[#F9F9F9] p-6 flex flex-col justify-start w-full lg:w-1/2  text-black ">
        <div className="text-start space-y-4 p-4 ">
          <h1 className="text-2xl font-serif">
            Our service isn’t just personal, it’s actually hyper personally
            exquisite
          </h1>
          <p className="text-base text-[#505977] font-serif">
            When we started Avion, the idea was simple. Make high quality
            furniture affordable and available for the mass market.
          </p>
          <p className="text-[#505977] font-serif">
            Handmade, and lovingly crafted furniture and homeware is what we
            live, breathe and design so our Chelsea boutique become the hotbed
            for the London interior design community.
          </p>
        </div>
        <div className="mt-60  justify-start flex">
          <button className=" py-[16px] px-[32px] text-start  border border-gray-300 focus:outline-none">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
