import "@/styles/globals.css";
import type { LayoutProps } from "@/typings";
import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps,
}: AppProps & { Component: LayoutProps }) {
  const getLayout = Component.getLayout ?? ((page: React.ReactElement) => page);

  return (
    <React.Fragment>
      <Head>
        <title>Mainstack Dashboard</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </React.Fragment>
  );
}
