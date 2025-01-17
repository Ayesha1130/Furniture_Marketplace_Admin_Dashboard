import React from "react";
import Image from "next/image";
import BrandDiffer from "@/components/globalcomponents/BrandDiffer/BrandDiffer";
import Product from "@/components/Product/Product";

import Benefitstwo from "@/components/globalcomponents/Benefitstwo/Benefitstwo";

const Brand = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 px-10 mt-10 mb-10">
        <div className=" bg-[#2A254B] p-6 flex flex-col justify-start w-full lg:w-1/2 text-white ">
          <div className="text-start space-y-4 p-4 ">
            <h1 className="text-2xl font-serif ">
              The furniture brand for the future, with timeless designs
            </h1>

            <div className="mt-60  justify-start flex">
              <button className=" py-[16px] px-[32px] text-start  border border-gray-300 focus:outline-none">
                View collection
              </button>
            </div>
            <div className=" pt-[70%]">
              <p className="text-base font-serif ">
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
          </div>
        </div>

        <div className="relative w-full lg:w-1/2">
          <Image
            src="/images/one.jpg"
            alt="Hero Image"
            layout="responsive"
            width={1440}
            height={740}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <BrandDiffer />
      <h1 className="pl-5 text-2xl font-serif">New ceramics</h1>
      <Product />
      <h1 className="pl-5 text-2xl font-serif">Our popular products</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6">
        <div className="grid   bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/sofa.jpg"
            alt="product1"
            width={630}
            height={375}
            className=" w-full h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B] font-serif">
            The Poplar suede sofa
          </h2>
          <p>£250</p>
        </div>

        <div className="grid   bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/one.jpg"
            alt="product2"
            width={305}
            height={375}
            className="  h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B] font-serif">The Dandy chair</h2>
          <p>£155</p>
        </div>

        <div className="grid grid-cols-1  bg-white p-10 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
          <Image
            src="/images/chair.jpg"
            alt="product3"
            width={305}
            height={375}
            className=" h-full object-cover"
          />

          <h2 className="mt-4 text-xl  text-[#2A254B] font-serif">The Dandy chair</h2>
          <p>£125</p>
        </div>

        <div className="flex justify-center items-center mt-20">
          <button className="bg-[#F9F9F9] text-black border-1 px-8 py-4 rounded mb-5">
            Veiw Collection
          </button>
        </div>
      </div>
      <Benefitstwo />
    </>
  );
};

export default Brand;
