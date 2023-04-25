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
import { BsPencil, BsPeople } from "react-icons/bs";
import { GiSandsOfTime } from "react-icons/gi";
import {
  AiOutlineCamera,
  AiOutlineDelete,
  AiOutlineVideoCamera,
} from "react-icons/ai";
import { IoIosTimer, IoMdAttach } from "react-icons/io";
import dummyimage from "@/assets/dummy.svg";

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
      <Layout.Sider
        {...props}
        className={clsx(
          "!fixed border-r border-[#EFF1F6] top-0 left-0 bottom-0 z-40 h-screen !min-w-[19rem] -translate-x-full overflow-y-auto px-2 transition delay-75 duration-300 overflow-x-hidden scrollbar-thin scrollbar-thumb-grey-400 md:!translate-x-0 md:px-6",
          {
            "translate-x-0": sidebarOpen,
          }
        )}
      >
        <div className="ml-6 mt-6 mb-8">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <Menu
          defaultSelectedKeys={[activeMenuKey]}
          openKeys={["other1", "other2"]}
          className="border-0 [&_.ant-menu-submenu-arrow]:hidden"
          // className="[&_.ant-menu-sub_.ant-menu-item]:!pl-4 [&_.ant-menu-sub_.ant-menu-item]:!pr-10 [&_.ant-menu-sub_.ant-menu-item-icon]:!hidden [&_.ant-menu-sub]:ml-6 [&_.ant-menu-sub]:border-l [&_.ant-menu-sub]:border-solid [&_.ant-menu-sub]:border-l-grey-400"
          items={[
            dashboardHomeMenuItem,
            {
              label: <span>Item 1</span>,
              key: "1",
              icon: <BsPencil className="text-base" />,
            },
            {
              label: <span>Item 2</span>,
              key: "2",
              icon: <BsPeople className="text-base" />,
            },
            {
              label: <span>Item 3</span>,
              key: "3",
              icon: <GiSandsOfTime className="text-base" />,
            },
            {
              label: <span>Others 1</span>,
              key: "other1",
              children: [
                {
                  label: <span>Item 4</span>,
                  key: "4",
                  icon: <AiOutlineCamera className="text-base" />,
                },
                {
                  label: <span>Item 5</span>,
                  key: "5",
                  icon: <AiOutlineDelete className="text-base" />,
                },
              ],
            },
            {
              label: <span>Others 2</span>,
              key: "other2",
              children: [
                {
                  label: <span>Item 6</span>,
                  key: "6",
                  icon: <AiOutlineVideoCamera className="text-base" />,
                },
                {
                  label: <span>Item 7</span>,
                  key: "7",
                  icon: <IoMdAttach className="text-base" />,
                },
                {
                  label: <span>Item 8</span>,
                  key: "8",
                  icon: <IoIosTimer className="text-base" />,
                },
              ],
            },
          ]}
          mode="inline"
        />

        <div className="pl-5 mt-10 pb-4 flex items-center gap-x-3">
          <img src={dummyimage.src} className="rounded-full" />
          <span className="text-base text-[#56616B]">Blessing Daniels</span>
        </div>
      </Layout.Sider>
    </React.Fragment>
  );
};

export default LeftSidebar;
