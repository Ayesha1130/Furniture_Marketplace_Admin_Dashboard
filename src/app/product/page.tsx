"use client";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react"; // Wishlist icon

interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
  description: string;
}

export default function ProductsPage() {
  const [wishlistPopup, setWishlistPopup] = useState(false);
  const [products, setProducts] = useState<Product[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]); // Store product IDs in wishlist

  // Load wishlist from localStorage (optional)
  useEffect(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save wishlist to localStorage whenever it updates (optional)
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to add/remove product from wishlist
  const toggleWishlist = (productId: string) => {
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove if already in wishlist
        : [...prevWishlist, productId]; // Add if not in wishlist
      return updatedWishlist;
    });

    setWishlistPopup(true);
    setTimeout(() => setWishlistPopup(false), 2000); // Auto close popup after 2 seconds
  };

  // Fetch products from Sanity when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
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
    <div className="container p-4">
      {/* Banner Section */}
      <div className="bg-[url(/images/all.jpg)] bg-cover bg-center h-[50vh]">
        <div className="pt-40">
          <h1 className="text-2xl pl-10 text-white font-serif">All Products</h1>
        </div>
      </div>

      {/* Featured Products Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 mt-9">Featured Products</h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 relative"
          >
            {/* Wishlist Icon */}
            <button
              onClick={() => toggleWishlist(product._id)}
              className="absolute top-3 right-3 z-10 hover:text-red-700 p-2 rounded-full shadow-lg transition"
            >
              <Heart
                className={`w-8 h-8 ${
                  wishlist.includes(product._id) ? "text-red-500" : "text-gray-700"
                }`}
              />
            </button>

            {/* Product Image */}
            <div className="relative w-full h-64 mb-4">
              <Image
                src={product.imageUrl}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>

            {/* Product Details */}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 truncate">{product.name}</h2>
              <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
              <p className="text-lg font-bold text-green-600 mt-4">${product.price}</p>

              {/* View Product Button */}
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

      {/* Wishlist Popup Notification */}
      {wishlistPopup && (
        <div className="fixed top-10 right-10 bg-green-600 text-white px-4 py-2 rounded shadow-lg">
          Successfully added to Wishlist!
        </div>
      )}
    </div>
  );
}
