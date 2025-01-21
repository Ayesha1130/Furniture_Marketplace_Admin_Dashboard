import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
const Banner = () => {
  return (
    <div className='flex-col lg:flex-row bg-[#2A254B] text-white p-4 justify-between items-center hidden md:hidden lg:flex '>
        <CiDeliveryTruck size={20} />
        <h1 className='items-center'>Free delivery on all orders over £50 with code easter checkout</h1>
        <div className='cursor-pointer'>
        <RxCross2 size={20} />
        </div>
    </div>
  )
}

export default Banner
