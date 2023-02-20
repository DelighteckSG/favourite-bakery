import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Amplify, { Hub } from "@aws-amplify/core";

import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
