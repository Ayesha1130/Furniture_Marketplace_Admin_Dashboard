import React from "react";
import Image from "next/image";
import Product from "@/components/Product/Product";
import BrandDiffer from "@/components/globalcomponents/BrandDiffer/BrandDiffer";

import Benefitstwo from "@/components/globalcomponents/Benefitstwo/Benefitstwo";

const Dandychair = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Part One */}
        <div className="w-full lg:w-1/2">
          <Image
            src="/images/dandy.jpg"
            alt="Dandy Chair"
            layout="responsive"
            width={1440}
            height={740}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Part Two */}
        <div className="bg-[#F6F6F6] p-6 flex flex-col  w-full lg:w-1/2 mb-[40%]">
          <div className=" space-y-4 ">
            <h1 className="text-2xl font-serif">The Dandy Chair</h1>
            <p className="text-base">£250</p>

            {/* Description */}
            <section>
              <h2 className="text-xl font-serif ">Description</h2>
              <p className="font-serif">
                A timeless design, with premium materials features as one of our
                most popular and iconic pieces. The Dandy Chair is perfect for
                any stylish living space with beech legs and lambskin leather
                upholstery.
              </p>
            </section>

            {/* Dimensions */}
            <section>
              <h3 className="text-xl font-serif">Dimensions</h3>
              <ul className="list-inside space-y-2">
                <li>
                  <strong>Height:</strong> 110cm
                </li>
                <li>
                  <strong>Width:</strong> 90cm
                </li>
                <li>
                  <strong>Depth:</strong> 60cm
                </li>
              </ul>
            </section>

            {/* Amount */}
            <section aria-labelledby="amount">
              <h3 id="amount" className="text-xl font-serif">
                Amount: $40
              </h3>
              <div className="flex items-center justify-center space-x-4">
                <button className="bg-[#E1E1E1] px-4 py-2 rounded-md">-</button>
                <span>1</span>
                <button className="bg-[#E1E1E1] px-4 py-2 rounded-md">+</button>
              </div>
            </section>

            {/* Button */}
            <button className="bg-[#FFFFFF] py-[16px] px-[32px] text-center border border-gray-300 hover:bg-[#F1F1F1] focus:outline-none mt-6">
              View Collection
            </button>
          </div>
        </div>
      </div>

      <h2 className="text-2xl ml-10 font-serif">You might also like</h2>
      <Product />
      <BrandDiffer />
      <Benefitstwo />
    </>
  );
};

export default Dandychair;
