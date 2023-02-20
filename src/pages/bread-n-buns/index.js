import Link from "next/link";
import { recordPageView } from "@/lib/analyticsRecord";
import { useState, useEffect } from "react";

const products = [
  {
    id: "little-tuna-bun",
    name: "Little Tuna Bun",
    href: "#",
    imageSrc:
      "https://static3.depositphotos.com/1005269/197/i/600/depositphotos_1972367-stock-photo-buns.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: "little-almond-cream-cheese",
    name: "Little Almond Cream Cheese",
    href: "#",
    imageSrc:
      "https://st5.depositphotos.com/2610399/63357/i/600/depositphotos_633572686-stock-photo-king-cake-galette-des-rois.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  // More products...
];

export default function Example() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.LOG_LEVEL = "VERBOSE";
      let pageURL = window.location.origin + window.location.pathname;
      console.log("page path : ", pageURL);
      recordPageView(pageURL, 20000);
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Bread and Buns
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <Link
                      href={{
                        pathname: `/bread-n-buns/${product.id}`,
                        query: {
                          id: product.id,
                        },
                      }}
                    >
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">
                  {product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
