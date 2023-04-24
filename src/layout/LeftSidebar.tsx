import React, { useEffect, useState } from "react";
import { Button, Divider, Layout, Menu, SiderProps } from "antd";
import { useRouter } from "next/router";
import clsx from "clsx";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import Logo from "@/components/Logo";
import {
  DASHBOARD_HOME_MENU_ITEM_PATH,
  dashboardHomeMenuItem,
} from "@/container/home";

export type MenuKeyTypes = typeof DASHBOARD_HOME_MENU_ITEM_PATH;

interface Props extends SiderProps {
  activeMenuKey: MenuKeyTypes;
}

const LeftSidebar: React.FC<Props> = ({ activeMenuKey, ...props }) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleRouteChange = () => {
      setSidebarOpen(false);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return (
    <React.Fragment>
      <div className="fixed top-2 -left-2">
        <Button
          className="h-max"
          type="link"
          onClick={() => setSidebarOpen(true)}
        >
          <CgMenuLeft className="text-h4 text-grey-900" />
        </Button>
      </div>
      <div
        className={clsx(
          "pointer-events-none fixed inset-0 z-10 bg-black/0 transition-all duration-300 md:hidden",
          {
            "pointer-events-auto !bg-black/40": sidebarOpen,
          }
        )}
        onClick={(e) => {
          e.stopPropagation();
          setSidebarOpen(false);
        }}
      ></div>
      <Layout.Sider
        {...props}
        className={clsx(
          "!fixed border-r border-[#EFF1F6] top-0 left-0 bottom-0 z-40 h-screen !min-w-[19rem] -translate-x-full overflow-y-auto !bg-grey-50 px-2 transition delay-75 duration-300 overflow-x-hidden scrollbar-thin scrollbar-thumb-grey-400 md:!relative md:!translate-x-0 md:px-6",
          {
            "translate-x-0": sidebarOpen,
          }
        )}
      >
        <div className="ml-6 mt-6">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <Menu
          defaultSelectedKeys={[activeMenuKey]}
          className="[&_.ant-menu-sub_.ant-menu-item]:!pl-4 [&_.ant-menu-sub_.ant-menu-item]:!pr-10 [&_.ant-menu-sub_.ant-menu-item-icon]:!hidden [&_.ant-menu-sub]:ml-6 [&_.ant-menu-sub]:border-l [&_.ant-menu-sub]:border-solid [&_.ant-menu-sub]:border-l-grey-400"
          // items={[dashboardHomeMenuItem]}
          mode="inline"
        />
      </Layout.Sider>
    </React.Fragment>
  );
};

export default LeftSidebar;
