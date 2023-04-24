import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import LeftSidebar, { MenuKeyTypes } from "./LeftSidebar";

interface Props {
  title?: React.ReactNode;
  activeMenuKey?: MenuKeyTypes;
}

const DashboardLayout: React.FC<React.PropsWithChildren<Props>> = ({
  activeMenuKey,
  title,
  children,
}) => {
  return (
    <>
      <Layout className="!min-h-screen">
        <LeftSidebar
          activeMenuKey={activeMenuKey!}
          collapsed={false}
          theme="light"
          trigger={false}
        />
        <Layout.Content className="flex h-screen flex-col bg-white">
          <header className="flex shrink-0 flex-wrap items-center justify-between gap-y-6 py-[22px] px-4 md:px-14 2xl:py-6 2xl:pb-6">
            <h2 className="order-2 mb-0 font-sohne font-semibold text-xl text-h6 md:order-none 2xl:text-h4">
              {title}
            </h2>
            <div className="flex w-full justify-end md:w-max md:justify-start"></div>
          </header>
          <div className="relative min-h-0 flex-1 pt-6 px-4 md:px-14 font-sohne scrollbar-thin scrollbar-thumb-grey-400">
            {children}
          </div>
        </Layout.Content>
      </Layout>
    </>
  );
};

export default DashboardLayout;
