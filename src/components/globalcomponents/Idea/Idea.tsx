import React from "react";
import Image from "next/image";
import Link from "next/link";

const Idea = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 px-10 mt-10 mb-10">
      <div className=" bg-[#2A254B] p-6 flex flex-col justify-start w-full lg:w-1/2 text-white ">
        <div className="text-start space-y-4 p-4 ">
          <h1 className="text-2xl font-serif ">It started with a small idea</h1>
          <p className="text-base font-serif">
            A global brand with local beginnings, our story begain in a small
            studio in South London in early 2014
          </p>
        </div>
        <div className="mt-60  justify-start flex">
          <Link
            href={"/brand"}
            className=" py-[16px] px-[32px] text-start  border border-gray-300 focus:outline-none"
          >
            View collection
          </Link>
        </div>
      </div>

      <div className="relative w-full lg:w-1/2">
        <Image
          src="/images/idea.jpg"
          alt="Hero Image"
          layout="responsive"
          width={1440}
          height={740}
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Idea;
