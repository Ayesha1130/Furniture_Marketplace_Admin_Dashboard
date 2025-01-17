import React from 'react'
import Image from 'next/image'
import Link from 'next/link' // Next.js Link import

// Props define karenge jo product data pass hoga
type ProductCardProps = {
  title: string
  imageUrl: string
  price: string
  description: string // Added description prop
  slug: string
}

const ProductCard: React.FC<ProductCardProps> = ({ title, imageUrl, price, description, slug }) => {
  return (
    <div className="relative flex flex-col bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow group">
      {/* Image */}
      <Image
        src={imageUrl} // Dynamic image URL
        alt={title} // Dynamic alt text
        width={305}
        height={375}
        className="w-full h-full object-cover"
      />

      {/* Hover content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="text-white text-center px-4">
          {/* Product Description */}
          <p className="text-sm mb-4">{description}</p>

          {/* "Add to Cart" Button */}
          <button className="text-white text-xl font-bold py-2 px-4 rounded-lg bg-[#FF6347] hover:bg-[#FF4500] transition-colors">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Product Title and Price */}
      <h2 className="mt-4 text-xl text-[#2A254B] font-serif">{title}</h2>
      <p>{price}</p>

      {/* View details button with Link component */}
      <Link href={`/product/${slug}`}>
        <a className="mt-4 text-[#FF6347] hover:text-[#FF4500]">
          View Details
        </a>
      </Link>
    </div>
  )
}

export default ProductCard
