"use client";

import { useEffect, useState } from "react";
import { Edit, Search, Trash } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EditProductDialog } from "./edit-product-dialog";
import { CreateProductDialog } from "./create-product-dialog";
import {
  ICard,
  productCreateSanity,
  productDeleteSanity,
  productPostSanity,
  sanityFetch,
} from "@/services/sanityApi";

export default function ProductsGrid() {
  const [editingProduct, setEditingProduct] = useState<ICard | null>(null);
  const [createProduct, setCreateProduct] = useState<ICard | null>(null);
  const [productArray, setProductsArray] = useState<ICard[]>([]);
  const [showProductArray, setShowProductArray] = useState<ICard[]>([]);
  const [search, setSearch] = useState<string>("");
  const [categoryDropdown, setCategoryDropdown] = useState<string[]>([]);
  const [isChange, setIsChange] = useState(false);

  useEffect(() => {
    async function getData() {
      let query = '*[_type == "product"]';
      if (search) {
        query = `*[_type == "product" && productName match "${search}*"]`;
      }
      const res: ICard[] = await sanityFetch(query);
      setProductsArray(res);
      setShowProductArray(res);
      setCategoryDropdown([...new Set(res.map((item) => item.category))]);
    }
    getData();
  }, [search, isChange]);

  const handleSaveProduct = async (updatedProduct: ICard) => {
    const res = await productPostSanity(updatedProduct);
    if (res) setIsChange(!isChange);
  };

  const handleDeleteProduct = async (updatedProduct: ICard) => {
    const res = await productDeleteSanity(updatedProduct);
    if (res) setIsChange(!isChange);
  };

  const handleCreateProduct = async (updatedProduct: ICard) => {
    try {
      const res = await productCreateSanity(updatedProduct);
      if (res) {
        setIsChange(!isChange);
        setCreateProduct(null);
      }
    } catch (error) {
      console.error("Creation failed:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">Products ({productArray.length})</h1>
        <Button onClick={() => setCreateProduct({ _id: "", productName: "", price: 0, inventory: 0, category: "", description: "", image: "", status: "" })}>
          Create New
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Input
          type="search"
          placeholder="Search products..."
          className="pl-8 max-w-sm"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select defaultValue="all" onValueChange={(value) => setShowProductArray(value !== "all" ? productArray.filter((item) => item.category === value) : productArray)}>
          <SelectTrigger className="w-[180px]"><SelectValue placeholder="Category" /></SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            {categoryDropdown.map((category, index) => (
              <SelectItem key={index} value={category}>{category}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {showProductArray.map((product) => (
          <Card key={product._id} className="transition-shadow hover:shadow-xl overflow-hidden hover:scale-105">
            <CardHeader className="border-b p-0">
              <div className="aspect-square relative">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.productName || "product image"}
                  fill
                  className="object-cover rounded-md shadow-md"
                />
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="font-semibold text-lg truncate">{product.productName}</CardTitle>
              <p className="text-xl font-bold text-green-600">${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground mt-1">Stock: {product.inventory}</p>
              <p className="text-sm text-muted-foreground mt-1">Category: {product.category || "No category available"}</p>
            </CardContent>
            <CardFooter className="border-t p-4 flex gap-2">
              <Button variant="outline" size="sm" className="flex-1" onClick={() => setEditingProduct(product)}>
                <Edit className="mr-2 size-4" /> Edit
              </Button>
              <Button variant="outline" size="sm" className="flex-1" onClick={() => handleDeleteProduct(product)}>
                <Trash className="mr-2 size-4" /> Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {editingProduct && (
        <EditProductDialog product={editingProduct} open={true} onOpenChange={(open) => !open && setEditingProduct(null)} onSave={handleSaveProduct} categoryDropdown={categoryDropdown} />
      )}

      {createProduct && (
        <CreateProductDialog product={createProduct} open={true} onOpenChange={(open) => !open && setCreateProduct(null)} onSave={handleCreateProduct} categoryDropdown={categoryDropdown} />
      )}
    </div>
  );
}
