import { NextPage } from "next";

export type LayoutProps = {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export type NextPageWithLayout<T = {}> = NextPage<T> & LayoutProps;