import "@/styles/globals.css";
import type { LayoutProps } from "@/typings";
import type { AppProps } from "next/app";
import React from "react";

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: LayoutProps }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <React.Fragment>{getLayout(<Component {...pageProps} />)}</React.Fragment>
  );
}
