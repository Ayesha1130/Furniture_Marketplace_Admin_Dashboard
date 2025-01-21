import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

// Define the type for the product fetched from Sanity
interface Product {
  _id: string;
  name: string;
  price: number;
  slug: { current: string };
  imageUrl: string;
  description: string;
}

export default async function ProductsPage() {
  const query = `*[_type == "product"] [4..9]{
    _id, 
    name, 
    price, 
    slug, 
    "imageUrl": image.asset->url, 
    description
  }`;

  const products = await client.fetch(query);

  return (
    <div className="container p-4">
       
     
      <h1 className="text-3xl font-bold text-center mb-10 mt-9">Best Selling Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product: Product) => (
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
  );
}

