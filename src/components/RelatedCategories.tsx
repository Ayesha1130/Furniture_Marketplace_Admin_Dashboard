import { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"
// Assuming you have a client configured for Sanity

interface Product {
  category: string;
}

export default function RelatedCategories({ id }: { id: string }) {
  const [categories, setCategories] = useState<string[]>([]);

  // Fetch the related product categories based on the product id
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
        .then((res: Product[]) => {
          if (res && res.length > 0) {
            // Extract the unique categories from the fetched products
            const categoriesFromProducts: string[] = res.map((product) => product.category);
            setCategories([...new Set(categoriesFromProducts)]);
          } else {
            setCategories([]); // If no categories are found, set to empty array
          }
        })
        .catch(() => setCategories([])); // Handle errors by resetting categories to empty array
    }
  }, [id]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 border-t border-[#E5E5E5]">
      <h2 className="text-[19px] font-medium text-[#111111] mb-6 font-helvetica">
        Related Categories
      </h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category, index) => (
          <button
            key={index}
            className="inline-flex items-center justify-center px-6 py-2 text-xs text-[#111111] bg-white border border-[#CCCCCC] rounded-full hover:bg-gray-50 transition-colors duration-200"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
