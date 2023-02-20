import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useState, useEffect } from "react";
import { recordPageView } from "@/lib/analyticsRecord";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.LOG_LEVEL = "VERBOSE";
      let pageURL = window.location.origin + window.location.pathname;
      console.log("page path : ", pageURL);
      recordPageView(pageURL, 20000);
    }
  }, []);

  return (
    <>
      <Head>
        <title> Favourite Bakery </title>
        <meta name="description" content="Your Favourite Bakery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-480 w-full bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-gray-300 via-violet-400 to-red-600">
        <h1 className="h-480 h-full text-3xl font-bold underline text-white">
          Hello First step to create our Bakery Website with Analytics
        </h1>
      </main>
    </>
  );
}
