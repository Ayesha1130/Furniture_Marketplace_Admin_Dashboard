"use client"
import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
  description: string;
}

export default function NewCeramic() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"][5..10]{
        _id, 
        name, 
        price, 
        slug, 
        "imageUrl": image.asset->url, 
        description
      }`;
      const data = await client.fetch(query);
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">New Ceramics</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {products.map((product: Product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition transform duration-300 ease-in-out"
          >
            <div className="relative w-full h-64">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-xl font-medium text-gray-800 truncate">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              <p className="text-xl font-bold text-gray-900 mt-4">${product.price}</p>
              <Link
                href={`/product/${product.slug.current}`}
                className="mt-5 inline-block px-6 py-2 bg-blue-950 text-white rounded-full text-lg font-semibold hover:bg-gray-800 transition duration-200"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
