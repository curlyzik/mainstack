import React, { ReactElement } from "react";
import { NextPageWithLayout } from "@/typings";

import DashboardLayout from "@/layout";
import HomeContainer, { DASHBOARD_HOME_MENU_ITEM_PATH } from "@/container/home";

interface Props {}

const DashboardHome: NextPageWithLayout<Props> = () => {
  return <HomeContainer />;
};

DashboardHome.getLayout = function getLayout(page: ReactElement) {
  return (
    <DashboardLayout
      title="Dashboard"
      activeMenuKey={DASHBOARD_HOME_MENU_ITEM_PATH}
    >
      {page}
    </DashboardLayout>
  );
};

export default DashboardHome;
