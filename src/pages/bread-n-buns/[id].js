import { useState, useEffect } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { RadioGroup } from "@headlessui/react";
import { recordPageView } from "@/lib/analyticsRecord";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { OrderItemsNow } from "@/lib/analyticsRecord";

const products = [
  {
    id: "little-tuna-bun",
    name: "Little Tuna Bun",
    href: "#",
    imageSrc:
      "https://static3.depositphotos.com/1005269/197/i/600/depositphotos_1972367-stock-photo-buns.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 35,
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
  },
  {
    id: "little-almond-cream-cheese",
    name: "Little Almond Cream Cheese",
    href: "#",
    imageSrc:
      "https://st3.depositphotos.com/8416818/17336/i/600/depositphotos_173368918-stock-photo-little-syrniki-fried-curd-pancakes.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: 45,
    color: "Black",
    images: [
      {
        src: "https://st5.depositphotos.com/2610399/63357/i/600/depositphotos_633572686-stock-photo-king-cake-galette-des-rois.jpg",
        alt: "Two each of gray, white, and black shirts laying flat.",
      },
      {
        src: "https://st3.depositphotos.com/8416818/17336/i/600/depositphotos_173368918-stock-photo-little-syrniki-fried-curd-pancakes.jpg",
        alt: "Model wearing plain black basic tee.",
      },
    ],
    description: "",
    highlights: ["organic ingredients", "natural", "100% pure"],
    details: "details here",
  },
  // More products...
];

const reviews = { href: "#", average: 4, totalCount: 117 };

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [open, setOpen] = useState(false);

  let router = useRouter();

  const { id } = router.query;

  return (
    <div className="bg-white">
      <div className="pt-6">
        {products.map((product) => (
          <div key={product.id}>
            {product.id === id && (
              <div>
                <nav key={product.id} aria-label="Breadcrumb">
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
                      onClick={() => {
                        setOpen(true);
                      }}
                      className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-1xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      Add to bag
                    </button>
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
              </div>
            )}
          </div>
        ))}
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in-out duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-700"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                      <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Shopping cart
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul
                              role="list"
                              className="-my-6 divide-y divide-gray-200"
                            >
                              {products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imageSrc}
                                      alt={product.imageAlt}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href={product.href}>
                                            {product.name}
                                          </a>
                                        </h3>
                                        <p className="ml-4">{product.price}</p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-gray-500">
                                        Qty {product.quantity}
                                      </p>

                                      <div className="flex">
                                        <button
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>
                          <p>$262.00</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <button
                            onClick={() => {
                              OrderItemsNow(products);
                            }}
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </button>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <button
                              type="button"
                              className="font-medium text-indigo-600 hover:text-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              Continue Shopping
                              <span aria-hidden="true"> &rarr;</span>
                            </button>
                          </p>
                        </div>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </div>
  );
}
