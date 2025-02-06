"use client";
import React from "react"
import Link from "next/link";

const Navbar = () => {


  return (
    <>
      <header className="flex justify-between p-4 items-center bg-blue-950 text-white">
        <h1 className="mt-0 ml-10 text-2xl font-serif font-bold">Avion</h1>
        <div className="flex gap-4 pr-10">
          <Link href={"/join-us"} className="font-serif font-bold">
            Join Us
          </Link>
        
        </div>
      </header>
    </>
  );
};

export default Navbar;
