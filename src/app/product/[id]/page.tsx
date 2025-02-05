"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SuccessModal from "@/components/SuccessModal";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import Loader from "@/components/Loader"

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  quantity: number;
  dimensions?: {
    height: number;
    width: number;
    depth: number;
  };
  rating?: {
    rate: number;
    count: number;
  };
}

const SingleProduct = () => {
  const [data, setData] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const query = `*[_type == "product" && slug.current == $id]{
        _id,
        name,
        price,
        description,
        category,
        "imageUrl": image.asset->url,
        dimensions
      }`;

      client
        .fetch(query, { id })
        .then((res) => {
          if (res && res.length > 0) {
            setData(res[0]);
          } else {
            setData(null);
          }
        })
        .catch(() => setData(null));
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!data) return;

    const existingCart = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = existingCart.some((item: Product) => item._id === data._id)
      ? existingCart.map((item: Product) =>
          item._id === data._id ? { ...item, quantity: item.quantity + 1 } : item
        )
      : [...existingCart, { ...data, quantity: 1 }];

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    setSuccessMessage("Product added to cart successfully!");
    setIsModalOpen(true);
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-12 mt-10 bg-white shadow-md rounded-lg overflow-hidden">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center items-center bg-gray-100 p-6">
          {data ? (
            <Image
              src={data.imageUrl}
              alt={data.name}
              width={500}
              height={400}
              className="rounded-lg shadow-lg object-cover"
            />
          ) : (
            <Loader />
          )}
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          {!data ? (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl text-gray-500">Loading...</p>
            </div>
          ) : (
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-800">{data.name}</h1>
              <p className="text-gray-600 text-lg">{data.description}</p>

              {/* Dimensions */}
              {data.dimensions && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold">Dimensions</h3>
                  <ul className="mt-2 text-gray-600 space-y-1">
                    <li>Height: {data.dimensions.height} cm</li>
                    <li>Width: {data.dimensions.width} cm</li>
                    <li>Depth: {data.dimensions.depth} cm</li>
                  </ul>
                </div>
              )}

              <p className="text-2xl font-bold text-gray-900">Price: ${data.price}</p>

              <button onClick={handleAddToCart} className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition">
                Add to Cart
              </button>
            </div>
          )}
        </div>
      </div>

      <SuccessModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        vCart={true}
        message={successMessage}
      />
    </div>
  );
};

export default SingleProduct;