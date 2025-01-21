"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import SuccessModal from "@/components/SuccessModal";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
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
        title,
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

  const renderDimensions = (dimensions: Product["dimensions"] | undefined) => {
    if (!dimensions) return "Not available";
    const { height, width, depth } = dimensions;
    return (
      <ul className="list-inside space-y-2">
        <li>
          <strong>Height:</strong> {height}cm
        </li>
        <li>
          <strong>Width:</strong> {width}cm
        </li>
        <li>
          <strong>Depth:</strong> {depth}cm
        </li>
      </ul>
    );
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row mt-10">
        {/* Part One */}
        <div className="w-full lg:w-1/2">
          {data && (
            <Image
              src={data.imageUrl}
              alt={data.name}
              layout="responsive"
              width={600}
              height={400}
              className="w-full h-[300px] object-cover"
            />
          )}
        </div>

        {/* Part Two */}
        <div className="bg-[#F6F6F6] p-6 flex flex-col w-full lg:w-1/2 mb-[40%]">
          {!data ? (
            <div className="flex items-center justify-center h-96">
              <p className="text-2xl text-gray-500">Loading product...</p>
            </div>
          ) : (
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4">{data.name}</h1>
              <p className="text-gray-600 mb-6">{data.description}</p>

              {/* Dimensions */}
              <section>
                <h3 className="text-xl font-serif">Dimensions</h3>
                {renderDimensions(data.dimensions)}
              </section>

              <p className="text-xl font-bold text-gray-900 my-4">Price: ${data.price}</p>

              <button
                onClick={handleAddToCart}
                className="bg-[#FFFFFF] py-[16px] px-[32px] text-center border rounded-sm border-gray-300 hover:bg-[#F1F1F1] focus:outline-none mt-6"
              >
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
    </>
  );
};

export default SingleProduct;
