import React from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaSkype,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#2A254B] text-white p-6 ">
      {/* Grid layout for footer sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  space-y-5">
        {/* Menu Section */}
        <div className="space-y-2">
          <h2 className="text-2xl mb-2 font-serif">Menu</h2>
          <p className="text-sm">New arrivals</p>
          <p className="text-sm">Best sellers</p>
          <p className="text-sm">Recently viewed</p>
          <p className="text-sm">Popular this week</p>
          <p className="text-sm">All products</p>
        </div>

        {/* Categories Section */}
        <div className="space-y-2">
          <h2 className="text-2xl  mb-2 font-serif">Categories</h2>
          <p className="text-sm ">Crockery</p>
          <p className="text-sm">Furniture</p>
          <p className="text-sm">Homeware</p>
          <p className="text-sm">Chairs</p>
          <p className="text-sm">Crockery</p>
        </div>

        {/* Our Company Section */}
        <div className="space-y-2">
          <h2 className="text-2xl  mb-2 font-serif">Our company</h2>
          <p className="text-sm ">About us</p>
          <p className="text-sm ">Vacancies</p>
          <p className="text-sm ">Contact us</p>
          <p className="text-sm ">Privacy</p>
          <p className="text-sm ">Returns policy</p>
        </div>

        {/* Mailing List Section */}
        <div className="flex flex-col">
          <h2 className="text-2xl  mb-2 font-serif">Join our mailing list</h2>
          <div className="flex w-full">
            <input
              type="text"
              placeholder="your@email.com"
              className="p-3 rounded-l-md border border-gray-400 text-black  focus:outline-none w-full bg-[#2A254B]"
            />
            <button className="text-[#2A254B] p-3 rounded-r-md bg-white focus:outline-none w-[118px]">
              Sign up
            </button>
          </div>
        </div>
      </div>
      {/* Footer Bottom Section */}
      <hr className="border border-slate-500 my-6" />
      <div className="flex flex-col md:flex-row justify-between items-center ">
        <p className="text-sm mb-5 font-serif">
          &copy; 2024 Ayesha Iqbal Hackathon. All rights reserved.
        </p>
        <div className="flex  gap-4 text-2xl ">
          <FaLinkedin />
          <FaFacebookSquare />
          <FaInstagram />
          <FaSkype />
          <FaTwitter />
        </div>
      </div>
    </div>
  );
};

export default Footer;
