import "@/styles/globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Amplify, { Hub } from "@aws-amplify/core";
import React, { useState, useEffect } from "react";
import { UserProvider } from "../lib/userContext";
import awsconfig from "../aws-exports";

Amplify.configure(awsconfig);

export default function App({ Component, pageProps }) {
  return (
    <>
      <UserProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </UserProvider>
    </>
  );
}

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === undefined) {
    throw new Error(
      "`useUser` hook must be used within a `UserProvider` component"
    );
  }
  return context;
};
