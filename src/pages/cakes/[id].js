import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { recordPageView } from "@/lib/analyticsRecord";
import { useRouter } from "next/router";

const products = [
  {
    id: "almond-fruits-top",
    name: "Almond Fruits Top",
    href: "#",
    imageSrc:
      "https://static8.depositphotos.com/1001071/897/i/600/depositphotos_8977671-stock-photo-creamy-cake-with-fruits-and.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$75",
    color: "Black",
    images: [
      {
        src: "https://st2.depositphotos.com/5971822/9144/i/600/depositphotos_91445754-stock-photo-cake-with-condensed-milk-nuts.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://static8.depositphotos.com/1001071/897/i/600/depositphotos_8977671-stock-photo-creamy-cake-with-fruits-and.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    description: "",
    highlights: ["organic ingredients", "natural", "100% pure"],
    details: "details here",
  },
  {
    id: "coco-exotic",
    name: "Coco Exotic",
    href: "#",
    imageSrc:
      "https://st2.depositphotos.com/2951763/5970/i/600/depositphotos_59707031-stock-photo-black-forest-cake-decorated-with.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$85",
    color: "Black",
    images: [
      {
        src: "https://st4.depositphotos.com/20524830/26203/i/600/depositphotos_262031854-stock-photo-beautiful-raw-vegan-bounty-cake.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://st4.depositphotos.com/20524830/26203/i/600/depositphotos_262031854-stock-photo-beautiful-raw-vegan-bounty-cake.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    description: "",
    highlights: ["organic ingredients", "natural", "100% pure"],
    details: "details here",
  },
  {
    id: "mango-tropicana",
    name: "Mango Tropicana",
    href: "#",
    imageSrc:
      "https://st2.depositphotos.com/2951763/5970/i/600/depositphotos_59707031-stock-photo-black-forest-cake-decorated-with.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$45",
    color: "Black",

    images: [
      {
        src: "https://static3.depositphotos.com/1005269/197/i/600/depositphotos_1972367-stock-photo-buns.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://static3.depositphotos.com/1000460/120/i/600/depositphotos_1207102-stock-photo-assortment-of-baked-bread.jpg",
        alt: "Model wearing plain white basic tee.",
      },
    ],
    description: "",
    highlights: ["organic ingredients", "natural", "100% pure"],
    details: "details here",
    // More products...
  },
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  let router = useRouter();

  const { id } = router.query;

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.LOG_LEVEL = "VERBOSE";
      let pageURL = window.location.origin + window.location.pathname;
      console.log("page path : ", pageURL);
      recordPageView(pageURL, 4000);
    }
  }, []);

  return (
    <div className="bg-white">
      <div className="pt-6">
        {products.map((product) => (
          <>
            {product.id === id && (
              <>
                <nav aria-label="Breadcrumb">
                  <ol
                    role="list"
                    className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
                  >
                    <li className="text-sm">
                      <a
                        href={product.href}
                        aria-current="page"
                        className="font-medium text-gray-500 hover:text-gray-600"
                      >
                        {product.name}
                      </a>
                    </li>
                  </ol>
                </nav>

                {/* Image gallery */}
                <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
                  <div className="aspect-w-3 aspect-h-4 hidden overflow-hidden rounded-lg lg:block">
                    <img
                      src={product.images[0].src}
                      alt={product.images[0].alt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
                    <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                      <img
                        src={product.images[1].src}
                        alt={product.images[1].alt}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>

                {/* Product info */}
                <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                  <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                    <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                      {product.name}
                    </h1>
                  </div>

                  {/* Options */}
                  <div className="mt-4 lg:row-span-3 lg:mt-0">
                    <h2 className="sr-only">Product information</h2>
                    <p className="text-3xl tracking-tight text-gray-900">
                      {product.price}
                    </p>

                    {/* Reviews */}
                    <div className="mt-6">
                      <h3 className="sr-only">Reviews</h3>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              className={classNames(
                                reviews.average > rating
                                  ? "text-gray-900"
                                  : "text-gray-200",
                                "h-5 w-5 flex-shrink-0"
                              )}
                              aria-hidden="true"
                            />
                          ))}
                        </div>
                        <p className="sr-only">
                          {reviews.average} out of 5 stars
                        </p>
                        <a
                          href={reviews.href}
                          className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          {reviews.totalCount} reviews
                        </a>
                      </div>
                    </div>

                    <form className="mt-10">
                      {/* Sizes */}
                      <div className="mt-10">
                        <div className="flex items-center justify-between">
                          <h3 className="text-sm font-medium text-gray-900">
                            Size
                          </h3>
                          <a
                            href="#"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Size guide
                          </a>
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-1xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Add to bag
                      </button>
                    </form>
                  </div>

                  <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                    {/* Description and details */}
                    <div>
                      <h3 className="sr-only">Description</h3>

                      <div className="space-y-6">
                        <p className="text-1xl text-gray-900">
                          {product.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h3 className="text-sm font-medium text-gray-900">
                        Highlights
                      </h3>

                      <div className="mt-4">
                        <ul
                          role="list"
                          className="list-disc space-y-2 pl-4 text-sm"
                        >
                          {product.highlights.map((highlight) => (
                            <li key={highlight} className="text-gray-400">
                              <span className="text-gray-600">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-10">
                      <h2 className="text-sm font-medium text-gray-900">
                        Details
                      </h2>

                      <div className="mt-4 space-y-6">
                        <p className="text-sm text-gray-600">
                          {product.details}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ))}
      </div>
    </div>
  );
}
