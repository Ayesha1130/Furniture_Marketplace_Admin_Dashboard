"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import BrandDiffer from "@/components/globalcomponents/BrandDiffer/BrandDiffer";
import Benefitstwo from "@/components/globalcomponents/Benefitstwo/Benefitstwo";
import { client } from "@/sanity/lib/client";

// Define Product interface based on the query structure
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
  description: string;
}

const Brand = () => {
  const [products, setProducts] = useState<Product[]>([]); // Explicit typing
  const [loading, setLoading] = useState<boolean>(true); // Add loading state
  
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][0..2]{
        _id, 
        name, 
        price, 
        slug, 
        "imageUrl": image.asset->url, 
        description
      }`;
      
      const productsData = await client.fetch(query);
      setProducts(productsData);
      setLoading(false); // Set loading to false once the data is fetched
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading message while fetching products
  }

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 px-10 mt-10 mb-10">
        <div className="bg-[#2A254B] p-6 flex flex-col justify-start w-full lg:w-1/2 text-white">
          <div className="text-start space-y-4 p-4">
            <h1 className="text-2xl font-serif">
              The furniture brand for the future, with timeless designs
            </h1>
            <div className="mt-8 justify-start flex">
          
               
              
              <h1 className="py-[16px] px-[32px] text-start border border-gray-300 focus:outline-none">
                Avion Furniture
              </h1>
      
              
            </div>
            <div className="pt-[70%]">
              <p className="text-base font-serif">
                A new era in eco-friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors, and a
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

      <div className="container p-4">
        <h1 className="text-3xl font-bold text-center mb-10 mt-9">Our Popular Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            >
              <div className="relative w-full h-64 mb-4">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
                <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
                <p className="text-lg font-bold text-green-600 mt-4">${product.price}</p>
                <div className="mt-6 flex justify-center">
                  <Link
                    href={`/product/${product.slug.current}`}
                    className="px-6 py-3 bg-blue-950 text-white rounded-lg hover:bg-yellow-500 transition-colors"
                  >
                    View Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <BrandDiffer />

      <Benefitstwo />
    </>
  );
};

export default Brand;
