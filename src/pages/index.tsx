import React from "react";
import { NextPageWithLayout } from "@/typings";

import DashboardLayout from "@/layout";
import HomeContainer, { DASHBOARD_HOME_MENU_ITEM_PATH } from "@/container/home";

interface Props {}

const DashboardHome: NextPageWithLayout<Props> = () => {
  return (
    <DashboardLayout
      title="Dashboard"
      activeMenuKey={DASHBOARD_HOME_MENU_ITEM_PATH}
    >
      <HomeContainer />
    </DashboardLayout>
  );
};

export default DashboardHome;
