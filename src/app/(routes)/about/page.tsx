import Benefits from '@/components/globalcomponents/Benefits/Benefits';
import Benefitstwo from '@/components/globalcomponents/Benefitstwo/Benefitstwo';
import BrandDiffer from '@/components/globalcomponents/BrandDiffer/BrandDiffer';
import GetInTouch from '@/components/globalcomponents/GetInTouch/GetInTouch';
import Idea from '@/components/globalcomponents/Idea/Idea';
import React from 'react';

const About = () => {
  return (
    <>
      <div className='flex flex-col h-[277px] mx-10 my-10'>
        <div className='flex flex-col justify-between mt-20'>
          <h1 className='text-2xl md:text-3xl lg-text-4xl w-full md:w-1/2 font-serif'>
            A brand built on the love of craftsmanship, quality, and outstanding customer service
          </h1>
          <div className=" ml-[] md:ml-[70%] mt-[-30px]">
            <button className="bg-[#F9F9F9] text-black border-1 px-8 py-4 rounded mb-5 font-serif">
              View Collection
            </button>
          </div>
        </div>
      </div>
      <Idea/>
      <GetInTouch/>
      <BrandDiffer/>
      <Benefitstwo/>
    </>
  );
};

export default About;
