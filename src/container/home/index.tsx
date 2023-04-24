import { ItemType } from "antd/es/menu/hooks/useItems";
import Link from "next/link";
import IconHome from "./IconDashboard";
import { Button } from "antd";
import clsx from "clsx";
import { useState } from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import DashboardChart from "./DashboardChart";

export const DASHBOARD_HOME_MENU_ITEM_PATH = "/";

export const dashboardHomeMenuItem: ItemType = {
  key: DASHBOARD_HOME_MENU_ITEM_PATH,
  label: (
    <Link
      href={DASHBOARD_HOME_MENU_ITEM_PATH}
      className="!text-[inherit]"
      title="Dashboard"
    >
      Dashboard
    </Link>
  ),
  icon: <IconHome className="h-5" />,
};
export default function HomeContainer() {
  const [activeDay, setActiveDay] = useState("");

  const days = [
    { name: "1 Day" },
    { name: "3 Days" },
    { name: "7 Days" },
    { name: "30 Days" },
    { name: "All Time" },
    { name: "Custom Date" },
  ];
  return (
    <div>
      <header className="flex justify-between items-center pb-6">
        <div className="flex flex-col gap-[0.625rem]">
          <span className="text-2xl font-semibold">
            Good morning, Blessing ⛅️
          </span>
          <span className="text-sm text-mainstackGrey font-normal">
            Check out your dashboard summary.
          </span>
        </div>
        <div>
          <span className="text-mainstackOrange-primary">View analytics</span>
        </div>
      </header>

      <div className="flex gap-x-3 pb-6">
        {days.map((day, i) => (
          <Button
            onClick={() => setActiveDay(day.name)}
            key={i}
            className={clsx(
              "border rounded-full transition-all duration-300 px-5 hover:border-mainstackOrange-primary hover:text-mainstackOrange-primary hover:font-semibold h-9 border-[#EFF1F6] text-mainstackGrey font-semibold text-sm",
              {
                "border-mainstackOrange-primary text-mainstackOrange-primary font-semibold bg-mainstackOrange-secondary":
                  activeDay === day.name,
              }
            )}
          >
            <span className="">{day.name}</span>
          </Button>
        ))}
      </div>

      <div className="border py-9 px-6 border-[#EFF1F6] rounded-xl">
        <div className="flex flex-col gap-2 pb-6">
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Page Views</span>
            <AiOutlineInfoCircle className="text-lg text-gray-500" />
          </div>
          <span className="text-mainstackGrey">All time</span>
        </div>

        <div className="pb-8">
          <div className="text-5xl text-mainstackDark font-semibold">500</div>
        </div>

        <DashboardChart />
      </div>
    </div>
  );
}
