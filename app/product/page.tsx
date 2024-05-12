"use client";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
  // Add more properties if needed
}

function page() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Products
          </h2>
          <p className="mb-5 font-normal text-gray-500 sm:text-xl">
            Designed for Testing
          </p>
        </div>
        {/* Basic License */}
        <div className="lg:grid lg:grid-cols-4 sm:gap-6 xl:gap-4 lg:space-y-0">
          {products.map((product) => (
            <ul className="border-2 border-gray-500  p-4 max-w-64 min-h-96  hover:border-gray-300">
              <li key={product.id}>
                <div className="flex justify-center items-center">
                  <img src={product.thumbnail} className="size-40 object-contain" />
                </div>
                <div className="pt-4">
                  <h2 className="font-bold truncate">{product.title}</h2>
                </div>
                <div className="max-h-32">
                  <p className="truncate max-w-64 max-h-32 ">
                    {product.description}
                  </p>
                </div>
                <p>฿{product.price}/ชิ้น</p>
                <div className="flex">
                  <svg
                    className="w-4 h-4 text-yellow-300 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
                  <p className="ms-2 text-sm font-bold text-gray-900 ">
                    {product.rating} Ratings
                  </p>
                </div>
                
              </li>
              <div className="flex pt-16">
              <svg
                    className="w-4 h-4 text-gray-200 me-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 20"
                  >
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                  </svg>
              </div>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
}
export default page;
