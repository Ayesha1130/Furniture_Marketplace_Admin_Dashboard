"use client";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="flex justify-between p-4 items-center  ">
        <h1 className="mt-0 text-[#22202E] ml-10 text-xl font-serif">Avion</h1>

        <nav className="hidden md:hidden lg:block ">
          <ul className="flex flex-row  justify-center gap-8 font-serif ">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
           
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        {isOpen && (
          <nav className=" md:block lg:hidden">
            <ul className="flex flex-col font-serif text-start items-center gap-4 mt-10 bg-white text-black absolute left-0 right-20 w-[70%] h-full  rounded-lg shadow-lg">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/product">Products</Link>
            </li>
           
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
            </ul>
          </nav>
        )}
        <div className="flex gap-4 pr-10">
        
          <CiSearch size={20} />
          <Link href={'/cart'}><MdOutlineShoppingCart size={20} /></Link>

          <Link href={'/'}><FaUserCircle size={20} /></Link>

          <button title="button" onClick={toggleMenu}>
            {!isOpen ? (
              <IoMdMenu size={20} className="md:block lg:hidden" />
            ) : (
              <RxCross2 size={20} className="md:block lg:hidden" />
            )}
          </button>
        </div>
      </header>

      <div className="p-5 mt-0  bg-[#F9F9F9] hidden md:hidden lg:block">
        <ul className="flex text-center justify-center gap-5 font-serif">
          
        <li>
              <Link href="/popularproducts">Popular Product</Link>
            </li>
          <li>
            <Link href={"/categoryproduct"}>Best Selling Product</Link>
          </li>
          <li>
            <Link href={"/brand"}>Brand</Link>
          </li>
          <li>
            <Link href={"/product"}>Chairs</Link>
          </li>
          <li>
            <Link href={"/product"}>Crockery</Link>
          </li>
          <li>
            <Link href={"/product"}>Tableware</Link>
          </li>
          <li>
            <Link href={"/product"}>Cutlery</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
